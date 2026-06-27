/**
 * Year Strong — Google Sheets backend (Google Apps Script)
 * ---------------------------------------------------------
 * This is the code the app's setup walkthrough asks you to paste into
 * Extensions → Apps Script. It receives your workout logs from the app
 * and stores them in a tab called "Log", and hands them back when the
 * app reopens (so phone + laptop stay in sync).
 *
 * It matches exactly what the app sends:
 *   GET                          -> { entries: [{ date, exercise, weight, reps }, ...] }
 *   POST { date, exercise, weight, reps }  -> appends one row
 *   POST { action: "clear" }               -> wipes all logged rows (keeps the header)
 *
 * You don't need to change anything below. Just paste, save, and deploy
 * as a Web App (Execute as: Me · Who has access: Anyone).
 */

const SHEET_NAME = 'Log';
const HEADERS = ['Date', 'Exercise', 'Weight', 'Reps'];

// Get (or create) the Log tab, making sure the header row exists.
function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  return sheet;
}

// Helper: return a JSON response.
function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// The app calls this when it opens, to pull your full history back down.
function doGet(e) {
  const sheet = getSheet();
  const rows = sheet.getDataRange().getValues();
  const entries = [];
  for (let i = 1; i < rows.length; i++) { // skip header row
    const date = rows[i][0];
    const exercise = rows[i][1];
    const weight = rows[i][2];
    const reps = rows[i][3];
    if (!exercise) continue;
    entries.push({
      date: (date instanceof Date) ? date.toISOString() : String(date),
      exercise: String(exercise),
      weight: Number(weight),
      reps: Number(reps)
    });
  }
  return json({ entries: entries });
}

// The app calls this every time you log a set (and to clear).
function doPost(e) {
  let body = {};
  try { body = JSON.parse(e.postData.contents); } catch (err) {}

  const sheet = getSheet();

  // Clear all logged rows, keep the header.
  if (body.action === 'clear') {
    const last = sheet.getLastRow();
    if (last > 1) sheet.deleteRows(2, last - 1);
    return json({ ok: true, cleared: true });
  }

  // Otherwise append a new log row. A lock avoids two near-simultaneous
  // saves landing on the same row.
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(5000);
    sheet.appendRow([
      body.date || new Date().toISOString(),
      body.exercise || '',
      body.weight,
      body.reps
    ]);
  } finally {
    lock.releaseLock();
  }
  return json({ ok: true });
}

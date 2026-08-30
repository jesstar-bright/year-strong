/* @ds-bundle: {"format":4,"namespace":"BrightStudioDesignSystem_8199fe","components":[{"name":"Aside","sourcePath":"components/core/Aside.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"ProgressSegments","sourcePath":"components/core/ProgressSegments.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"Checklist","sourcePath":"components/data/Checklist.jsx"},{"name":"DayStrip","sourcePath":"components/data/DayStrip.jsx"},{"name":"FilterChips","sourcePath":"components/data/FilterChips.jsx"},{"name":"MacroGrid","sourcePath":"components/data/MacroGrid.jsx"},{"name":"MealRow","sourcePath":"components/data/MealRow.jsx"},{"name":"RefCard","sourcePath":"components/data/RefCard.jsx"},{"name":"SetTable","sourcePath":"components/data/SetTable.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ActionSheet","sourcePath":"components/ios/ActionSheet.jsx"},{"name":"Alert","sourcePath":"components/ios/Alert.jsx"},{"name":"LargeTitle","sourcePath":"components/ios/LargeTitle.jsx"},{"name":"ListGroup","sourcePath":"components/ios/ListGroup.jsx"},{"name":"Menu","sourcePath":"components/ios/Menu.jsx"},{"name":"NavBar","sourcePath":"components/ios/NavBar.jsx"},{"name":"SearchField","sourcePath":"components/ios/SearchField.jsx"},{"name":"SegmentedControl","sourcePath":"components/ios/SegmentedControl.jsx"},{"name":"Sheet","sourcePath":"components/ios/Sheet.jsx"},{"name":"Stepper","sourcePath":"components/ios/Stepper.jsx"},{"name":"Switch","sourcePath":"components/ios/Switch.jsx"},{"name":"TabBar","sourcePath":"components/ios/TabBar.jsx"}],"sourceHashes":{"components/core/Aside.jsx":"38e06f724d01","components/core/Button.jsx":"4679a5893264","components/core/Card.jsx":"93275e7d65b4","components/core/Eyebrow.jsx":"f12a835147c7","components/core/ProgressSegments.jsx":"7e10950f61a6","components/core/StatCard.jsx":"fbdecc3e12aa","components/data/Checklist.jsx":"94e8ac0d4463","components/data/DayStrip.jsx":"c304669940db","components/data/FilterChips.jsx":"1135babd6e59","components/data/MacroGrid.jsx":"fafc97b97015","components/data/MealRow.jsx":"37b0975f9235","components/data/RefCard.jsx":"bf6164a56dd0","components/data/SetTable.jsx":"6eb038d7c54a","components/feedback/Toast.jsx":"7c74fb33002d","components/ios/ActionSheet.jsx":"d56600a447ad","components/ios/Alert.jsx":"6472328be7e4","components/ios/LargeTitle.jsx":"a23d2f3ccfbc","components/ios/ListGroup.jsx":"7a51bda32bc3","components/ios/Menu.jsx":"6e527daf0a8b","components/ios/NavBar.jsx":"39853e2d4358","components/ios/SearchField.jsx":"88fff1920851","components/ios/SegmentedControl.jsx":"9cf91525a222","components/ios/Sheet.jsx":"2f022a5f7e9e","components/ios/Stepper.jsx":"fe7fe3e99581","components/ios/Switch.jsx":"11ffb92cf530","components/ios/TabBar.jsx":"5e7489bc4079","ui_kits/yearstrong/FoodScreen.jsx":"1a7a1f41f343","ui_kits/yearstrong/LogScreen.jsx":"17728fb3cc75","ui_kits/yearstrong/NotesScreen.jsx":"70a8eb7d8ca4","ui_kits/yearstrong/OnboardingScreen.jsx":"6a2e8e1c14a6","ui_kits/yearstrong/PhaseScreen.jsx":"d6a79561bedc","ui_kits/yearstrong/RecipeScreen.jsx":"31a7c728e584","ui_kits/yearstrong/ReferenceScreen.jsx":"d914211fe7d0","ui_kits/yearstrong/Shell.jsx":"21e58236b853","ui_kits/yearstrong/TodayScreen.jsx":"bab61c57425c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BrightStudioDesignSystem_8199fe = window.BrightStudioDesignSystem_8199fe || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Aside.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** The single italic coaching line per screen. */
function Aside({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    className: cn('ys-aside', className)
  }, rest), children);
}
Object.assign(__ds_scope, { Aside });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Aside.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** The one action control. Pink in light mode, soft pink in dark — the token handles it. */
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cn('ys-btn', variant !== 'primary' && `ys-btn--${variant}`, size !== 'md' && `ys-btn--${size}`, block && 'ys-btn--block', className)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** Paper card with ink outline and sticker shadow. */
function Card({
  tone = 'card',
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cn('ys-card', tone !== 'card' && `ys-card--${tone}`, className)
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** Tracked-out mono caps above a title, or as a section label. */
function Eyebrow({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cn('ys-eyebrow', className)
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressSegments.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** Discrete progress — one segment per exercise, not a continuous bar. */
function ProgressSegments({
  total = 8,
  done = 0,
  tone = 'action',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cn('ys-progress', tone === 'ref' && 'ys-progress--ref', className),
    role: "progressbar",
    "aria-valuenow": done,
    "aria-valuemin": 0,
    "aria-valuemax": total
  }, rest), Array.from({
    length: total
  }, (_, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    "data-done": i < done ? 'true' : undefined
  })));
}
Object.assign(__ds_scope, { ProgressSegments });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressSegments.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** A single number that matters, with its label and an optional delta line. */
function StatCard({
  label,
  value,
  sub,
  done = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cn('ys-stat', done && 'ys-stat--done', className)
  }, rest), /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("b", null, value), sub ? /*#__PURE__*/React.createElement("small", null, sub) : null);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Checklist.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');
const TICK = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 13l5 5L20 6"
}));

/** Sage-ticking checklist for prep steps and daily habits. */
function Checklist({
  items = [],
  onToggle,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cn(className)
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    className: "ys-check",
    role: "checkbox",
    "aria-checked": !!it.done,
    onClick: () => onToggle && onToggle(i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ys-check__box"
  }, TICK), /*#__PURE__*/React.createElement("span", null, it.label))));
}
Object.assign(__ds_scope, { Checklist });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Checklist.jsx", error: String((e && e.message) || e) }); }

// components/data/DayStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');
const DAYS = ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'];

/** Week selector across the top of the Today screen. */
function DayStrip({
  days = DAYS,
  value,
  done = [],
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cn('ys-daystrip', className),
    role: "tablist"
  }, rest), days.map((d, i) => /*#__PURE__*/React.createElement("button", {
    key: d,
    type: "button",
    role: "tab",
    "aria-current": value === i ? 'true' : undefined,
    "data-done": done.includes(i) ? 'true' : undefined,
    onClick: () => onChange && onChange(i)
  }, d)));
}
Object.assign(__ds_scope, { DayStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DayStrip.jsx", error: String((e && e.message) || e) }); }

// components/data/FilterChips.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** Horizontal filter row. */
function FilterChips({
  items = [],
  value,
  onChange,
  tone = 'action',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cn('ys-chips', className)
  }, rest), items.map(it => {
    const o = typeof it === 'string' ? {
      value: it,
      label: it
    } : it;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      className: cn('ys-chip', tone === 'ref' && 'ys-chip--ref'),
      "aria-pressed": value === o.value,
      onClick: () => onChange && onChange(o.value)
    }, o.label);
  }));
}
Object.assign(__ds_scope, { FilterChips });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/FilterChips.jsx", error: String((e && e.message) || e) }); }

// components/data/MacroGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** Row of three macro/metric chips. */
function MacroGrid({
  items = [],
  columns = 3,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cn('ys-macros', className),
    style: {
      gridTemplateColumns: `repeat(${columns},1fr)`,
      ...style
    }
  }, rest), items.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: cn('ys-macro', m.accent && 'ys-macro--accent')
  }, /*#__PURE__*/React.createElement("span", null, m.label), /*#__PURE__*/React.createElement("b", null, m.value))));
}
Object.assign(__ds_scope, { MacroGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MacroGrid.jsx", error: String((e && e.message) || e) }); }

// components/data/MealRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** One meal slot on the Food tab, with its lettered options. */
function MealRow({
  time,
  tag,
  name,
  alts,
  options = [],
  onClick,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cn('ys-meal', className),
    onClick: onClick
  }, rest), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "ys-meal__time"
  }, time), /*#__PURE__*/React.createElement("span", {
    className: "ys-meal__tag"
  }, tag)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "ys-meal__name"
  }, name), alts ? /*#__PURE__*/React.createElement("span", {
    className: "ys-meal__alt"
  }, " \xB7 ", alts) : null, options.map((o, i) => /*#__PURE__*/React.createElement("span", {
    className: "ys-meal__opt",
    key: i
  }, /*#__PURE__*/React.createElement("b", null, o.key), /*#__PURE__*/React.createElement("span", null, o.text)))));
}
Object.assign(__ds_scope, { MealRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MealRow.jsx", error: String((e && e.message) || e) }); }

// components/data/RefCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** Sage research block. Information, never an action. */
function RefCard({
  title,
  cite,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cn('ys-refcard', className)
  }, rest), title ? /*#__PURE__*/React.createElement("p", {
    className: "ys-refcard__title"
  }, title) : null, /*#__PURE__*/React.createElement("div", null, children), cite ? /*#__PURE__*/React.createElement("cite", {
    className: "ys-refcard__cite"
  }, cite) : null);
}
Object.assign(__ds_scope, { RefCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/RefCard.jsx", error: String((e && e.message) || e) }); }

// components/data/SetTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** The set/reps logging table. The core object of the app. */
function SetTable({
  sets = [],
  current = 0,
  onSelect,
  headers = ['SET', 'REPS'],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cn('ys-settable', className)
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ys-settable__head"
  }, headers.map(h => /*#__PURE__*/React.createElement("span", {
    key: h
  }, h))), sets.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    className: "ys-setrow",
    "aria-current": i === current ? 'true' : undefined,
    "data-done": s.done ? 'true' : undefined,
    onClick: () => onSelect && onSelect(i)
  }, /*#__PURE__*/React.createElement("span", null, s.label ?? i + 1), /*#__PURE__*/React.createElement("b", null, s.reps ?? ''))));
}
Object.assign(__ds_scope, { SetTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SetTable.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** Transient confirmation pill. */
function Toast({
  tone = 'default',
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    className: cn('ys-toast', tone === 'done' && 'ys-toast--done', className)
  }, rest), children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/ios/ActionSheet.jsx
try { (() => {
const cn = (...a) => a.filter(Boolean).join(' ');

/** iOS action sheet: grouped choices plus a separate Cancel. */
function ActionSheet({
  open = false,
  actions = [],
  cancelLabel = 'Cancel',
  onCancel,
  onSelect,
  className = ''
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ys-veil",
    onClick: onCancel
  }), /*#__PURE__*/React.createElement("div", {
    className: cn('ys-actionsheet', className),
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ys-actionsheet__group"
  }, actions.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    "data-danger": a.danger ? 'true' : undefined,
    onClick: () => onSelect && onSelect(a.value ?? i)
  }, a.label))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ys-actionsheet__cancel",
    onClick: onCancel
  }, cancelLabel)));
}
Object.assign(__ds_scope, { ActionSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ios/ActionSheet.jsx", error: String((e && e.message) || e) }); }

// components/ios/Alert.jsx
try { (() => {
const cn = (...a) => a.filter(Boolean).join(' ');

/** iOS alert. Confirmations only — never for information. */
function Alert({
  open = false,
  title,
  message,
  actions = [],
  onSelect,
  className = ''
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ys-veil"
  }), /*#__PURE__*/React.createElement("div", {
    className: cn('ys-alert', className),
    role: "alertdialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ys-alert__body"
  }, title ? /*#__PURE__*/React.createElement("p", {
    className: "ys-alert__title"
  }, title) : null, message ? /*#__PURE__*/React.createElement("p", {
    className: "ys-alert__text"
  }, message) : null), /*#__PURE__*/React.createElement("div", {
    className: "ys-alert__actions"
  }, actions.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    style: a.danger ? {
      color: 'var(--pink-ink)',
      fontWeight: 800
    } : undefined,
    onClick: () => onSelect && onSelect(a.value ?? i)
  }, a.label)))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ios/Alert.jsx", error: String((e && e.message) || e) }); }

// components/ios/LargeTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** iOS large title, set in Gluten. */
function LargeTitle({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("h1", _extends({
    className: cn('ys-largetitle', className)
  }, rest), children);
}
Object.assign(__ds_scope, { LargeTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ios/LargeTitle.jsx", error: String((e && e.message) || e) }); }

// components/ios/ListGroup.jsx
try { (() => {
const cn = (...a) => a.filter(Boolean).join(' ');

/** Inset grouped list — the iOS settings pattern. */
function ListGroup({
  label,
  rows = [],
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", rest, label ? /*#__PURE__*/React.createElement("span", {
    className: "ys-list__label"
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: cn('ys-list', className)
  }, children || rows.map((r, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    className: "ys-row",
    onClick: r.onClick
  }, /*#__PURE__*/React.createElement("span", null, r.label), r.value ? /*#__PURE__*/React.createElement("span", {
    className: "ys-row__value"
  }, r.value) : null, r.chevron !== false ? /*#__PURE__*/React.createElement("span", {
    className: "ys-row__chev",
    style: r.value ? undefined : {
      marginLeft: 'auto'
    }
  }, "\u203A") : null))));
}
Object.assign(__ds_scope, { ListGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ios/ListGroup.jsx", error: String((e && e.message) || e) }); }

// components/ios/Menu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** Dropdown / context menu. Render inside a positioned parent. */
function Menu({
  items = [],
  value,
  onSelect,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cn('ys-menu', className),
    role: "menu"
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    role: "menuitem",
    "data-danger": it.danger ? 'true' : undefined,
    onClick: () => onSelect && onSelect(it.value ?? i)
  }, /*#__PURE__*/React.createElement("span", null, it.label), value != null && value === it.value ? /*#__PURE__*/React.createElement("span", {
    className: "ys-menu__check"
  }, "\u2713") : null)));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ios/Menu.jsx", error: String((e && e.message) || e) }); }

// components/ios/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** iOS navigation bar: back affordance, centred title, trailing action. */
function NavBar({
  back,
  onBack,
  title,
  action,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    className: cn('ys-navbar', className)
  }, rest), back ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ys-navbar__back",
    onClick: onBack
  }, "\u2039 ", back) : null, title ? /*#__PURE__*/React.createElement("span", {
    className: "ys-navbar__title"
  }, title) : null, action ? /*#__PURE__*/React.createElement("span", {
    className: "ys-navbar__action"
  }, action) : null);
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ios/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/ios/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** iOS search field. */
function SearchField({
  placeholder = 'Search',
  value,
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: cn('ys-search', className)
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2315"), /*#__PURE__*/React.createElement("input", _extends({
    type: "search",
    placeholder: placeholder,
    value: value,
    onChange: e => onChange && onChange(e.target.value)
  }, rest)));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ios/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/ios/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** iOS segmented control. Two to four short options. */
function SegmentedControl({
  items = [],
  value,
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cn('ys-seg', className),
    role: "tablist"
  }, rest), items.map(it => {
    const o = typeof it === 'string' ? {
      value: it,
      label: it
    } : it;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      role: "tab",
      "aria-selected": value === o.value,
      onClick: () => onChange && onChange(o.value)
    }, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ios/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/ios/Sheet.jsx
try { (() => {
const cn = (...a) => a.filter(Boolean).join(' ');

/** Bottom sheet with a grabber. Renders inside the phone frame, not the page. */
function Sheet({
  open = false,
  title,
  onClose,
  className = '',
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ys-veil",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: cn('ys-sheet', className),
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ys-sheet__grabber"
  }), title ? /*#__PURE__*/React.createElement("p", {
    className: "ys-sheet__title"
  }, title) : null, children));
}
Object.assign(__ds_scope, { Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ios/Sheet.jsx", error: String((e && e.message) || e) }); }

// components/ios/Stepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** −/+ stepper for reps, weight and sets. */
function Stepper({
  value = 0,
  min = 0,
  max = 999,
  step = 1,
  unit = '',
  onChange,
  className = '',
  ...rest
}) {
  const set = v => onChange && onChange(Math.min(max, Math.max(min, v)));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cn('ys-stepper', className)
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Decrease",
    onClick: () => set(value - step)
  }, "\u2212"), /*#__PURE__*/React.createElement("span", null, value, unit), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Increase",
    onClick: () => set(value + step)
  }, "+"));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ios/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/ios/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** iOS toggle. Sage when on, because "on" is a settled state. */
function Switch({
  checked = false,
  label,
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    className: cn('ys-switch', className),
    onClick: () => onChange && onChange(!checked)
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ys-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ys-switch__thumb"
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ios/Switch.jsx", error: String((e && e.message) || e) }); }

// components/ios/TabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cn = (...a) => a.filter(Boolean).join(' ');

/** Bottom tab bar. Pink indicator, except Notes which reads sage. */
function TabBar({
  items = [],
  value,
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: cn('ys-tabbar', className),
    role: "tablist"
  }, rest), items.map(it => {
    const t = typeof it === 'string' ? {
      value: it,
      label: it
    } : it;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      type: "button",
      role: "tab",
      "data-tone": t.tone,
      "aria-selected": value === t.value,
      onClick: () => onChange && onChange(t.value)
    }, t.label);
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ios/TabBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/yearstrong/FoodScreen.jsx
try { (() => {
const {
  LargeTitle,
  Eyebrow,
  MacroGrid,
  FilterChips,
  MealRow,
  RefCard,
  Card,
  SearchField,
  Aside
} = window.BrightStudioDesignSystem_8199fe;
function FoodScreen({
  onOpenRecipe,
  onOpenReference
}) {
  const [f, setF] = React.useState('All');
  const [q, setQ] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    className: "ys-screen"
  }, /*#__PURE__*/React.createElement(LargeTitle, {
    style: {
      padding: '8px 0 12px'
    }
  }, "Food"), /*#__PURE__*/React.createElement(Eyebrow, null, "Daily nutrition \xB7 revised 29 Aug"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      margin: '12px 0 18px'
    }
  }, "Built around your tolerated foods. No cow whey, no tomatoes, no wheat, no nuts, no soy."), /*#__PURE__*/React.createElement(MacroGrid, {
    items: [{
      label: 'Protein',
      value: '120 g'
    }, {
      label: 'Meals',
      value: '3 × 40'
    }, {
      label: 'Walk',
      value: '10 min'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '18px 0'
    }
  }, /*#__PURE__*/React.createElement(SearchField, {
    placeholder: "Search recipes",
    value: q,
    onChange: setQ
  })), /*#__PURE__*/React.createElement(FilterChips, {
    items: ['All', '10 min', 'High iron', 'Rescue'],
    value: f,
    onChange: setF
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "flat",
    style: {
      padding: '4px 0 0',
      marginTop: 18
    }
  }, MEALS.map((m, i) => /*#__PURE__*/React.createElement(MealRow, {
    key: i,
    time: m.time,
    tag: m.tag,
    name: m.name,
    alts: m.alts,
    options: m.options,
    onClick: onOpenRecipe
  }))), /*#__PURE__*/React.createElement(Aside, null, "Coffee after breakfast, not with it. The pepper is the working ingredient, not a garnish."), /*#__PURE__*/React.createElement("div", {
    onClick: onOpenReference,
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(RefCard, {
    title: "Iron rule",
    cite: "Morck, Lynch & Cook 1983, AJCN 37:416"
  }, "Coffee an hour ", /*#__PURE__*/React.createElement("i", null, "before"), " the meal is free. An hour ", /*#__PURE__*/React.createElement("i", null, "after"), " costs you about 39%. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-ref)',
      fontWeight: 800
    }
  }, "All reference \u203A"))));
}
Object.assign(window, {
  FoodScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/yearstrong/FoodScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/yearstrong/LogScreen.jsx
try { (() => {
const {
  LargeTitle,
  SegmentedControl,
  StatCard,
  Card,
  Eyebrow,
  Menu,
  ListGroup
} = window.BrightStudioDesignSystem_8199fe;
const WEEKS = [34, 52, 44, 68, 61, 83, 100];
function LogScreen() {
  const [range, setRange] = React.useState('Week');
  const [menu, setMenu] = React.useState(false);
  const [sort, setSort] = React.useState('recent');
  return /*#__PURE__*/React.createElement("div", {
    className: "ys-screen"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(LargeTitle, {
    style: {
      padding: '8px 0 12px'
    }
  }, "Log"), /*#__PURE__*/React.createElement("button", {
    className: "ys-btn ys-btn--plain ys-btn--sm",
    style: {
      marginLeft: 'auto'
    },
    onClick: () => setMenu(!menu)
  }, "Sort \u2304")), menu ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 0
    }
  }, /*#__PURE__*/React.createElement(Menu, {
    value: sort,
    onSelect: v => {
      setSort(v);
      setMenu(false);
    },
    items: [{
      value: 'recent',
      label: 'Most recent'
    }, {
      value: 'heavy',
      label: 'Heaviest first'
    }, {
      value: 'az',
      label: 'A–Z'
    }, {
      label: 'Delete last entry',
      danger: true
    }]
  }))) : null, /*#__PURE__*/React.createElement(SegmentedControl, {
    items: ['Week', 'Month', 'Year'],
    value: range,
    onChange: setRange
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14,
      margin: '20px 0'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Streak",
    value: "17",
    sub: "days in a row"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Weight",
    value: "152.4",
    sub: "\u22120.8 this week",
    done: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Pull-up",
    value: "2 / 5",
    sub: "strict reps"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Protein",
    value: "88g",
    sub: "of 120 today"
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Volume \xB7 last 7 weeks"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8,
      height: 120,
      marginTop: 14
    }
  }, WEEKS.map((h, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      flex: 1,
      height: `${h}%`,
      background: i === WEEKS.length - 1 ? 'var(--pink)' : 'var(--sage)',
      border: '2px solid var(--border-strong)',
      borderRadius: '6px 6px 0 0'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "W1"), /*#__PURE__*/React.createElement(Eyebrow, null, "W7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(ListGroup, {
    label: "Recent sessions",
    rows: [{
      label: 'Sun · Reset',
      value: '8 of 8'
    }, {
      label: 'Sat · Open',
      value: '8 of 8'
    }, {
      label: 'Fri · Upper push',
      value: '9 of 9'
    }, {
      label: 'Thu · Lower hinge',
      value: '6 of 6'
    }]
  })));
}
Object.assign(window, {
  LogScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/yearstrong/LogScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/yearstrong/NotesScreen.jsx
try { (() => {
const {
  LargeTitle,
  Eyebrow,
  Card,
  Button,
  Sheet,
  FilterChips,
  Aside
} = window.BrightStudioDesignSystem_8199fe;
const SEED = [{
  when: 'Today',
  tag: 'body',
  text: 'Left hip felt looser on the 90/90 today. First time it has not clicked.'
}, {
  when: 'Friday',
  tag: 'lift',
  text: 'Bench went up 5 lb and the last two reps were clean. Not a fluke.'
}, {
  when: 'Wednesday',
  tag: 'food',
  text: 'Ate the batch skillet three days running and did not get bored. Cook triple every Sunday.'
}];
function NotesScreen() {
  const [notes, setNotes] = React.useState(SEED);
  const [open, setOpen] = React.useState(false);
  const [draft, setDraft] = React.useState('');
  const [f, setF] = React.useState('All');
  const list = f === 'All' ? notes : notes.filter(n => n.tag === f.toLowerCase());
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ys-screen"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(LargeTitle, {
    style: {
      padding: '8px 0 12px'
    }
  }, "Notes"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ref",
    style: {
      marginLeft: 'auto'
    },
    onClick: () => setOpen(true)
  }, "NEW")), /*#__PURE__*/React.createElement(FilterChips, {
    tone: "ref",
    items: ['All', 'Body', 'Lift', 'Food'],
    value: f,
    onChange: setF
  }), /*#__PURE__*/React.createElement(Aside, null, "Write the thing you will not remember in eight weeks."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, list.map((n, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    tone: "flat",
    style: {
      background: 'var(--surface-ref)',
      borderColor: 'var(--border-ref)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, n.when.toUpperCase()), /*#__PURE__*/React.createElement(Eyebrow, null, n.tag.toUpperCase())), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-small)',
      margin: '8px 0 0',
      color: 'var(--text-body)'
    }
  }, n.text))))), /*#__PURE__*/React.createElement(Sheet, {
    open: open,
    title: "New note",
    onClose: () => setOpen(false)
  }, /*#__PURE__*/React.createElement("textarea", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    rows: 4,
    placeholder: "what happened?",
    style: {
      width: '100%',
      padding: '12px 14px',
      font: 'var(--type-body)',
      color: 'var(--text-strong)',
      background: 'var(--surface-sunken)',
      border: '2.5px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      resize: 'vertical',
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    block: true,
    variant: "ref",
    onClick: () => {
      if (draft.trim()) setNotes([{
        when: 'Just now',
        tag: 'body',
        text: draft
      }, ...notes]);
      setDraft('');
      setOpen(false);
    }
  }, "SAVE NOTE")));
}
Object.assign(window, {
  NotesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/yearstrong/NotesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/yearstrong/OnboardingScreen.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  ListGroup,
  Stepper,
  SegmentedControl,
  Switch,
  Aside,
  ProgressSegments
} = window.BrightStudioDesignSystem_8199fe;
function OnboardingScreen({
  onDone
}) {
  const [step, setStep] = React.useState(0);
  const [protein, setProtein] = React.useState(120);
  const [days, setDays] = React.useState('5');
  const [dark, setDark] = React.useState(false);
  const next = () => step < 2 ? setStep(step + 1) : onDone();
  return /*#__PURE__*/React.createElement("div", {
    className: "ys-screen",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 0 0'
    }
  }, /*#__PURE__*/React.createElement(ProgressSegments, {
    total: 3,
    done: step + 1
  })), step === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/icon-sage-render.png",
    width: "132",
    height: "132",
    alt: "",
    style: {
      borderRadius: '23.5%',
      margin: '0 auto 24px'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      margin: '0 0 6px'
    }
  }, "Year Strong"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 21px/1.2 var(--font-body)',
      color: 'var(--text-accent)',
      margin: '0 auto 16px'
    }
  }, "twelve months, five days a week"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      margin: '0 auto'
    }
  }, "Lift consistently, hit protein, log every set. The plan handles the rest.")), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Step 2 of 3"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-2xl)',
      margin: '12px 0 20px'
    }
  }, "Your targets"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-strong)'
    }
  }, "Protein, g/day"), /*#__PURE__*/React.createElement(Stepper, {
    value: protein,
    step: 5,
    onChange: setProtein
  })), /*#__PURE__*/React.createElement("span", {
    className: "ys-list__label"
  }, "Lift days per week"), /*#__PURE__*/React.createElement(SegmentedControl, {
    items: ['3', '4', '5', '6'],
    value: days,
    onChange: setDays
  }), /*#__PURE__*/React.createElement(Aside, null, "Five is the plan. Four still works. Three is maintenance, not progress.")), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Step 3 of 3"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-2xl)',
      margin: '12px 0 20px'
    }
  }, "How it should behave"), /*#__PURE__*/React.createElement(ListGroup, {
    rows: [{
      label: 'Remind me to lift',
      value: '6:00 AM'
    }, {
      label: 'Remind me to walk',
      value: 'After dinner'
    }, {
      label: 'Weigh-in',
      value: 'Daily'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: dark,
    label: "Start in dark mode",
    onChange: setDark
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    block: true,
    onClick: next
  }, step < 2 ? 'CONTINUE' : 'START THE YEAR'), step < 2 ? /*#__PURE__*/React.createElement("button", {
    className: "ys-btn ys-btn--plain",
    style: {
      width: '100%',
      marginTop: 8
    },
    onClick: onDone
  }, "Skip setup") : null));
}
Object.assign(window, {
  OnboardingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/yearstrong/OnboardingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/yearstrong/PhaseScreen.jsx
try { (() => {
const {
  NavBar,
  Eyebrow,
  MacroGrid,
  ListGroup,
  Card,
  ProgressSegments,
  Aside
} = window.BrightStudioDesignSystem_8199fe;
const PHASES = [{
  n: '01',
  range: 'Months 1—3',
  title: 'Build the patterns',
  state: 'Now',
  done: 4,
  total: 12
}, {
  n: '02',
  range: 'Months 4—6',
  title: 'Push the cut',
  state: 'Next',
  done: 0,
  total: 12
}, {
  n: '03',
  range: 'Months 7—9',
  title: 'Diet break & recomp',
  state: '',
  done: 0,
  total: 12
}, {
  n: '04',
  range: 'Months 10—12',
  title: 'Final reveal',
  state: '',
  done: 0,
  total: 12
}];
function PhaseScreen({
  onBack
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavBar, {
    back: "Today",
    onBack: onBack,
    title: "The year"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ys-screen"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Months 1\u20143 \xB7 12 weeks \xB7 week 4"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-2xl)',
      margin: '12px 0 4px'
    }
  }, "Show up five times a week."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 21px/1.2 var(--font-body)',
      color: 'var(--text-accent)',
      margin: '0 0 18px'
    }
  }, "Build the patterns."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      marginBottom: 20
    }
  }, "Five strength days, Mon\u2013Fri. Weekends are tennis, golf, hiking. Your job is to lift consistently, hit protein, and log every set."), /*#__PURE__*/React.createElement(MacroGrid, {
    items: [{
      label: 'Protein',
      value: '120 g'
    }, {
      label: 'Lift days',
      value: '5 / wk'
    }, {
      label: 'Target',
      value: '−0.7 lb'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'grid',
      gap: 14
    }
  }, PHASES.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.n,
    tone: p.state === 'Now' ? 'card' : 'sunken'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-metric)',
      color: p.state === 'Now' ? 'var(--text-accent)' : 'var(--text-muted)'
    }
  }, p.n), /*#__PURE__*/React.createElement(Eyebrow, null, p.range), p.state ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: 'var(--type-label)',
      letterSpacing: 'var(--track-wide)',
      color: p.state === 'Now' ? 'var(--text-accent)' : 'var(--text-muted)'
    }
  }, p.state.toUpperCase()) : null), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)',
      margin: '8px 0 12px'
    }
  }, p.title), /*#__PURE__*/React.createElement(ProgressSegments, {
    total: p.total,
    done: p.done,
    tone: p.state === 'Now' ? 'action' : 'ref'
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(ListGroup, {
    label: "This phase",
    rows: [{
      label: 'Protein target',
      value: '120 g'
    }, {
      label: 'Hydration',
      value: '2.5 L'
    }, {
      label: 'Weekend',
      value: 'Tennis · golf'
    }, {
      label: 'Loss target',
      value: '~0.7 lb/wk'
    }]
  })), /*#__PURE__*/React.createElement(Aside, null, "Four good workouts a week for fifty weeks beats five perfect ones for twelve.")));
}
Object.assign(window, {
  PhaseScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/yearstrong/PhaseScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/yearstrong/RecipeScreen.jsx
try { (() => {
const {
  NavBar,
  Eyebrow,
  MacroGrid,
  RefCard,
  Checklist,
  Button,
  Aside,
  Card,
  Toast
} = window.BrightStudioDesignSystem_8199fe;
const ING = ['4 oz cooked sirloin, sliced thin across the grain', '2 large eggs', '1 whole red bell pepper, quartered — ~150 mg vit C', '¼ cup flat-leaf parsley, chopped fine', '1 garlic clove, minced', '2 tsp olive oil + 1 tsp for the pan', '150 g cooled boiled potatoes, halved'];
const METHOD = ['Dry skillet on high. Char the pepper quarters skin-down 4 min until blackened in patches.', 'Chimichurri: parsley, garlic, vinegar, olive oil, chilli, salt. Stir in a mug. Thirty seconds.', 'Same pan, 1 tsp oil. Potatoes cut-side down, 4 min undisturbed, until they take colour.', 'Lay the sliced steak in for 45 seconds a side — you are warming it, not cooking it again.', 'Push aside, crack the eggs in, lid on 2 min for set whites and runny yolks.', 'Plate: peppers, steak, eggs. Chimichurri over everything.'];
function RecipeScreen({
  onBack
}) {
  const [ing, setIng] = React.useState(ING.map(l => ({
    label: l
  })));
  const [toast, setToast] = React.useState(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavBar, {
    back: "Food",
    onBack: onBack,
    action: /*#__PURE__*/React.createElement("button", {
      className: "ys-btn ys-btn--plain ys-btn--sm"
    }, "Save")
  }), /*#__PURE__*/React.createElement("div", {
    className: "ys-screen"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Recipe B1 \xB7 Monday, from Sunday's steak"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-2xl)',
      margin: '12px 0 8px'
    }
  }, "Steak & eggs with charred red pepper chimichurri"), /*#__PURE__*/React.createElement(Eyebrow, null, "07:30 \xB7 12 min \xB7 serves 1 \xB7 one pan"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      margin: '16px 0 20px'
    }
  }, "The steak is already cooked, so this is a reheat and two eggs. Haem iron from beef next to a whole charred red pepper \u2014 150\xA0mg of vitamin C in the same pan."), /*#__PURE__*/React.createElement(MacroGrid, {
    items: [{
      label: 'Protein',
      value: '48 g'
    }, {
      label: 'Calories',
      value: '610'
    }, {
      label: 'Carbs',
      value: '38 g'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(MacroGrid, {
    items: [{
      label: 'Fat',
      value: '30 g'
    }, {
      label: 'Iron',
      value: '5.1 mg',
      accent: true
    }, {
      label: 'Vit C',
      value: '170 mg',
      accent: true
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '22px 0'
    }
  }, /*#__PURE__*/React.createElement(RefCard, {
    title: "Iron rule",
    cite: "Morck, Lynch & Cook 1983, AJCN 37:416"
  }, "Egg iron is non-haem and yolk phosvitin binds it hard, so the pepper is the working ingredient. Coffee before is free; within an hour after costs ~39%.")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xl)',
      margin: '0 0 10px'
    }
  }, "Ingredients"), /*#__PURE__*/React.createElement(Checklist, {
    items: ing,
    onToggle: i => setIng(ing.map((x, j) => j === i ? {
      ...x,
      done: !x.done
    } : x))
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xl)',
      margin: '24px 0 10px'
    }
  }, "Method"), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      paddingLeft: 0,
      listStyle: 'none',
      display: 'grid',
      gap: 13
    }
  }, METHOD.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 27,
      height: 27,
      border: '2.5px solid var(--border-strong)',
      borderRadius: 999,
      display: 'grid',
      placeItems: 'center',
      font: 'var(--type-label)',
      color: 'var(--text-strong)'
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)'
    }
  }, s)))), /*#__PURE__*/React.createElement(Aside, null, "Do not skip the eight-minute rest. Cut it early and the juice is on the board instead of in you."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    block: true,
    onClick: () => {
      setToast('logged to today');
      setTimeout(() => setToast(null), 1900);
    }
  }, "LOG THIS MEAL")), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 96,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "done"
  }, toast)) : null);
}
Object.assign(window, {
  RecipeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/yearstrong/RecipeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/yearstrong/ReferenceScreen.jsx
try { (() => {
const {
  NavBar,
  LargeTitle,
  RefCard,
  FilterChips,
  Eyebrow,
  SearchField,
  Aside
} = window.BrightStudioDesignSystem_8199fe;
const REFS = [{
  tag: 'iron',
  title: 'Vitamin C with every plant-iron meal',
  body: 'Across 299 subjects, absorption rose in direct proportion to ascorbic acid; 50 mg per main meal was the stated point of practical optimum.',
  cite: 'Hallberg, Brune & Rossander 1986, Hum Nutr Appl Nutr 40:97'
}, {
  tag: 'iron',
  title: 'A little meat lifts the plants',
  body: 'Against an equal amount of egg protein, beef muscle raised non-haem absorption 180% and chicken 100%.',
  cite: 'Hurrell, Reddy, Juillerat & Cook 2006, J Nutr 136:2808'
}, {
  tag: 'insulin',
  title: 'Legumes as the carbohydrate',
  body: 'A cup of legumes a day for three months lowered HbA1c by 0.5% against a high-wheat-fibre control in 121 people. Best-evidenced single change on the list.',
  cite: 'Jenkins 2012, Arch Intern Med 172:1653'
}, {
  tag: 'insulin',
  title: 'The ten-minute walk',
  body: 'Ten minutes of walking after each meal lowered post-meal glucose about 12% — and about 22% after the evening meal.',
  cite: 'Reynolds 2016, Diabetologia'
}, {
  tag: 'lifting',
  title: 'Resistance training protects lean mass',
  body: 'On GLP-1 therapy, lean mass was 17.5% of total weight lost with lifting versus 25.4% without.',
  cite: 'Eisa 2026, Diabetes Obes Metab'
}];
function ReferenceScreen({
  onBack
}) {
  const [f, setF] = React.useState('All');
  const [q, setQ] = React.useState('');
  const list = REFS.filter(r => (f === 'All' || r.tag === f.toLowerCase()) && (!q || (r.title + r.body).toLowerCase().includes(q.toLowerCase())));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavBar, {
    back: "Food",
    onBack: onBack,
    title: "Reference"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ys-screen"
  }, /*#__PURE__*/React.createElement(LargeTitle, {
    style: {
      padding: '4px 0 10px'
    }
  }, "Reference"), /*#__PURE__*/React.createElement(Aside, null, "Ranked by how good the evidence is, not by how good it sounds."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 0 16px'
    }
  }, /*#__PURE__*/React.createElement(SearchField, {
    placeholder: "Search the evidence",
    value: q,
    onChange: setQ
  })), /*#__PURE__*/React.createElement(FilterChips, {
    tone: "ref",
    items: ['All', 'Iron', 'Insulin', 'Lifting'],
    value: f,
    onChange: setF
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14,
      marginTop: 18
    }
  }, list.map((r, i) => /*#__PURE__*/React.createElement(RefCard, {
    key: i,
    title: r.title,
    cite: r.cite
  }, r.body)), list.length === 0 ? /*#__PURE__*/React.createElement(Eyebrow, null, "Nothing matches that.") : null)));
}
Object.assign(window, {
  ReferenceScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/yearstrong/ReferenceScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/yearstrong/Shell.jsx
try { (() => {
const {
  TabBar,
  Eyebrow
} = window.BrightStudioDesignSystem_8199fe;
function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ys-status"
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: '2px'
    }
  }, "\u25AA\u25AA\u25AA \u2301 \u25AE"));
}

/** The phone frame everything renders inside. position:relative so sheets can anchor. */
function Phone({
  children,
  tab,
  onTab,
  hideTabs
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ys-phone"
  }, /*#__PURE__*/React.createElement(StatusBar, null), children, hideTabs ? null : /*#__PURE__*/React.createElement(TabBar, {
    value: tab,
    onChange: onTab,
    items: [{
      value: 'today',
      label: 'TODAY'
    }, {
      value: 'food',
      label: 'FOOD'
    }, {
      value: 'log',
      label: 'LOG'
    }, {
      value: 'notes',
      label: 'NOTES',
      tone: 'ref'
    }]
  }));
}
const WORKOUT = {
  day: 'DAY G · SUNDAY',
  title: 'Reset',
  sub: 'flow, balance & control',
  aside: 'No load, no score — go to the first honest resistance and breathe there.',
  moves: [{
    name: 'Sun salutation A',
    reps: '4 × 1 round',
    sets: 4,
    desc: 'Mountain → forward fold → half lift → plank → chaturanga or knees → up dog → down dog. One breath per movement. Round one is a warm-up; by round four you are actually moving.'
  }, {
    name: 'Low lunge ⇄ half splits',
    reps: '3 × 5/side',
    sets: 3,
    desc: 'Rock forward into the lunge, then shift back over the straight front leg with a flat back. Hip flexor one way, hamstring the other.'
  }, {
    name: 'Tree pose',
    reps: '3 × 30 sec/side',
    sets: 3,
    desc: 'Foot above or below the knee, never on it. Closing your eyes on the last set removes vision and forces the hip and ankle to balance.'
  }, {
    name: 'Warrior II → reverse → side angle',
    reps: '2 × 3/side',
    sets: 2,
    desc: 'Front knee over the ankle, back foot flat and turned in, hips open. Five slow breaths in each shape before you move. Isometric glute and adductor work disguised as yoga.'
  }, {
    name: 'Bird dog — 5s hold',
    reps: '3 × 8/side',
    sets: 3,
    desc: 'Balance a water bottle on your low back and do not let it fall. Reach long rather than high. Anti-rotation for the deep core, at a speed you can actually feel.'
  }, {
    name: 'Side plank — knees down if needed',
    reps: '3 × 30 sec/side',
    sets: 3,
    desc: 'Stack the shoulder over the elbow, lift the bottom ribs away from the floor. Quadratus lumborum and glute medius — the two muscles that keep hips level.'
  }, {
    name: 'Glute bridge march — slow',
    reps: '3 × 10/side',
    sets: 3,
    desc: 'Bridge up, ribs down, then lift one knee without letting that hip drop an inch. Two seconds up, two seconds down. Wakes the glutes for Monday without fatiguing them.'
  }, {
    name: 'Child\'s pose → supine twist → still',
    reps: '1 × 20 breaths',
    sets: 1,
    desc: 'Knees wide, then knees to one side and look the other way. Finish flat on your back doing nothing for two minutes. Sunday ends the week and starts it.'
  }]
};
WORKOUT.total = WORKOUT.moves.length;
const MEALS = [{
  time: '07:30',
  tag: '40 G · IRON',
  name: 'Turkey hash',
  alts: 'salmon hash · turkey bowl · warm oats',
  options: [{
    key: 'A',
    text: 'Turkey, spinach & red pepper hash with pepitas'
  }, {
    key: 'B',
    text: 'Salmon + sweet potato hash with spinach'
  }, {
    key: 'C',
    text: 'Ground turkey + rice + zucchini bowl'
  }]
}, {
  time: '12:30',
  tag: '40 G',
  name: 'Steak & pepper bowl',
  alts: 'salmon · shrimp · wraps',
  options: [{
    key: 'A',
    text: "Monday steak & pepper bowl, from Sunday's batch"
  }, {
    key: 'B',
    text: 'Lemon-dill salmon, smashed potatoes, spinach'
  }, {
    key: 'C',
    text: 'Garlic shrimp with rice, peppers, zucchini'
  }]
}, {
  time: '19:00',
  tag: '40 G',
  name: 'Sunday batch skillet',
  alts: 'steak · ginger shrimp · meatballs',
  options: [{
    key: 'A',
    text: 'Sunday steak & pepper batch skillet — cook triple'
  }, {
    key: 'B',
    text: 'Sirloin + roasted baby potatoes + garlicky greens'
  }]
}];
Object.assign(window, {
  Phone,
  StatusBar,
  WORKOUT,
  MEALS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/yearstrong/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/yearstrong/TodayScreen.jsx
try { (() => {
const {
  Eyebrow,
  DayStrip,
  ProgressSegments,
  SetTable,
  Aside,
  Button,
  Sheet,
  Stepper,
  ActionSheet,
  Toast
} = window.BrightStudioDesignSystem_8199fe;
function TodayScreen({
  onOpenPhase
}) {
  const [day, setDay] = React.useState(6);
  const [move, setMove] = React.useState(0);
  const [cur, setCur] = React.useState(0);
  const [logged, setLogged] = React.useState({});
  const [sheet, setSheet] = React.useState(false);
  const [actions, setActions] = React.useState(false);
  const [reps, setReps] = React.useState(1);
  const [toast, setToast] = React.useState(null);
  const m = WORKOUT.moves[move];
  const key = (mi, si) => `${mi}:${si}`;
  const doneCount = Object.keys(logged).length ? new Set(Object.keys(logged).map(k => k.split(':')[0])).size : 0;
  const sets = Array.from({
    length: m.sets
  }, (_, i) => ({
    reps: logged[key(move, i)],
    done: logged[key(move, i)] != null
  }));
  const save = () => {
    setLogged({
      ...logged,
      [key(move, cur)]: String(reps)
    });
    setSheet(false);
    setToast('set logged');
    setTimeout(() => setToast(null), 1900);
    if (cur < m.sets - 1) setCur(cur + 1);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ys-screen"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, WORKOUT.day), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActions(true),
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, doneCount, " OF ", WORKOUT.total, " DONE \u22EF"))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      margin: '12px 0 2px'
    }
  }, WORKOUT.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 23px/1.15 var(--font-body)',
      color: 'var(--text-accent)',
      margin: '0 0 18px'
    }
  }, WORKOUT.sub), /*#__PURE__*/React.createElement(ProgressSegments, {
    total: WORKOUT.total,
    done: doneCount
  }), /*#__PURE__*/React.createElement(DayStrip, {
    value: day,
    done: [0, 1, 2, 3],
    onChange: setDay
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      margin: '20px 0 0',
      overflowX: 'auto',
      paddingBottom: 4
    }
  }, WORKOUT.moves.map((x, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "ys-chip",
    "aria-pressed": i === move,
    onClick: () => {
      setMove(i);
      setCur(0);
    },
    style: {
      whiteSpace: 'nowrap'
    }
  }, i + 1))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-2xl)',
      margin: '22px 0 6px'
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-metric)',
      color: 'var(--text-accent)',
      marginBottom: 14
    }
  }, m.reps), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      marginBottom: 22
    }
  }, m.desc), /*#__PURE__*/React.createElement(SetTable, {
    sets: sets,
    current: cur,
    onSelect: i => {
      setCur(i);
      setReps(Number(sets[i].reps) || 1);
      setSheet(true);
    }
  }), /*#__PURE__*/React.createElement(Aside, null, WORKOUT.aside), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    block: true,
    onClick: () => setSheet(true)
  }, "LOG SET"), /*#__PURE__*/React.createElement("button", {
    className: "ys-btn ys-btn--plain",
    style: {
      width: '100%',
      marginTop: 10
    },
    onClick: onOpenPhase
  }, "See the whole phase \u203A")), /*#__PURE__*/React.createElement(Sheet, {
    open: sheet,
    title: `Set ${cur + 1} · ${m.name}`,
    onClose: () => setSheet(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ys-eyebrow"
  }, "Reps"), /*#__PURE__*/React.createElement(Stepper, {
    value: reps,
    onChange: setReps
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    block: true,
    onClick: save
  }, "SAVE SET")), /*#__PURE__*/React.createElement(ActionSheet, {
    open: actions,
    onCancel: () => setActions(false),
    onSelect: v => {
      if (v === 'clear') setLogged({});
      setActions(false);
    },
    actions: [{
      value: 'swap',
      label: 'Swap this exercise'
    }, {
      value: 'skip',
      label: 'Skip today'
    }, {
      value: 'clear',
      label: 'Clear all sets',
      danger: true
    }]
  }), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 96,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "done"
  }, toast)) : null);
}
Object.assign(window, {
  TodayScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/yearstrong/TodayScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Aside = __ds_scope.Aside;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.ProgressSegments = __ds_scope.ProgressSegments;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Checklist = __ds_scope.Checklist;

__ds_ns.DayStrip = __ds_scope.DayStrip;

__ds_ns.FilterChips = __ds_scope.FilterChips;

__ds_ns.MacroGrid = __ds_scope.MacroGrid;

__ds_ns.MealRow = __ds_scope.MealRow;

__ds_ns.RefCard = __ds_scope.RefCard;

__ds_ns.SetTable = __ds_scope.SetTable;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ActionSheet = __ds_scope.ActionSheet;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.LargeTitle = __ds_scope.LargeTitle;

__ds_ns.ListGroup = __ds_scope.ListGroup;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Sheet = __ds_scope.Sheet;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TabBar = __ds_scope.TabBar;

})();

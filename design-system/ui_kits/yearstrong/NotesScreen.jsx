const { LargeTitle, Eyebrow, Card, Button, Sheet, FilterChips, Aside } = window.BrightStudioDesignSystem_8199fe;

const SEED=[
  {when:'Today', tag:'body', text:'Left hip felt looser on the 90/90 today. First time it has not clicked.'},
  {when:'Friday', tag:'lift', text:'Bench went up 5 lb and the last two reps were clean. Not a fluke.'},
  {when:'Wednesday', tag:'food', text:'Ate the batch skillet three days running and did not get bored. Cook triple every Sunday.'},
];

function NotesScreen(){
  const [notes,setNotes]=React.useState(SEED);
  const [open,setOpen]=React.useState(false);
  const [draft,setDraft]=React.useState('');
  const [f,setF]=React.useState('All');
  const list = f==='All' ? notes : notes.filter(n=>n.tag===f.toLowerCase());
  return (<>
    <div className="ys-screen">
      <div style={{display:'flex',alignItems:'center'}}>
        <LargeTitle style={{padding:'8px 0 12px'}}>Notes</LargeTitle>
        <Button size="sm" variant="ref" style={{marginLeft:'auto'}} onClick={()=>setOpen(true)}>NEW</Button>
      </div>
      <FilterChips tone="ref" items={['All','Body','Lift','Food']} value={f} onChange={setF} />
      <Aside>Write the thing you will not remember in eight weeks.</Aside>
      <div style={{display:'grid',gap:14}}>
        {list.map((n,i)=>(
          <Card key={i} tone="flat" style={{background:'var(--surface-ref)',borderColor:'var(--border-ref)'}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <Eyebrow>{n.when.toUpperCase()}</Eyebrow><Eyebrow>{n.tag.toUpperCase()}</Eyebrow>
            </div>
            <p style={{font:'var(--type-small)',margin:'8px 0 0',color:'var(--text-body)'}}>{n.text}</p>
          </Card>
        ))}
      </div>
    </div>
    <Sheet open={open} title="New note" onClose={()=>setOpen(false)}>
      <textarea value={draft} onChange={(e)=>setDraft(e.target.value)} rows={4} placeholder="what happened?"
        style={{width:'100%',padding:'12px 14px',font:'var(--type-body)',color:'var(--text-strong)',background:'var(--surface-sunken)',border:'2.5px solid var(--border-strong)',borderRadius:'var(--radius-md)',resize:'vertical',marginBottom:16}} />
      <Button size="lg" block variant="ref" onClick={()=>{if(draft.trim())setNotes([{when:'Just now',tag:'body',text:draft},...notes]);setDraft('');setOpen(false)}}>SAVE NOTE</Button>
    </Sheet>
  </>);
}
Object.assign(window,{ NotesScreen });

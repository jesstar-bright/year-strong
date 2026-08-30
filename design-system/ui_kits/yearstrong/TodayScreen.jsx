const { Eyebrow, DayStrip, ProgressSegments, SetTable, Aside, Button, Sheet, Stepper, ActionSheet, Toast } = window.BrightStudioDesignSystem_8199fe;

function TodayScreen({ onOpenPhase }){
  const [day,setDay]=React.useState(6);
  const [move,setMove]=React.useState(0);
  const [cur,setCur]=React.useState(0);
  const [logged,setLogged]=React.useState({});
  const [sheet,setSheet]=React.useState(false);
  const [actions,setActions]=React.useState(false);
  const [reps,setReps]=React.useState(1);
  const [toast,setToast]=React.useState(null);
  const m = WORKOUT.moves[move];
  const key = (mi,si)=>`${mi}:${si}`;
  const doneCount = Object.keys(logged).length ? new Set(Object.keys(logged).map(k=>k.split(':')[0])).size : 0;
  const sets = Array.from({length:m.sets},(_,i)=>({reps:logged[key(move,i)], done:logged[key(move,i)]!=null}));
  const save = ()=>{
    setLogged({...logged,[key(move,cur)]:String(reps)});
    setSheet(false); setToast('set logged'); setTimeout(()=>setToast(null),1900);
    if(cur < m.sets-1) setCur(cur+1);
  };
  return (<>
    <div className="ys-screen">
      <div style={{display:'flex',justifyContent:'space-between',gap:12,paddingTop:8}}>
        <Eyebrow>{WORKOUT.day}</Eyebrow>
        <button onClick={()=>setActions(true)} style={{border:0,background:'none',padding:0,cursor:'pointer'}}>
          <Eyebrow>{doneCount} OF {WORKOUT.total} DONE ⋯</Eyebrow>
        </button>
      </div>
      <h2 style={{fontSize:'var(--text-3xl)',margin:'12px 0 2px'}}>{WORKOUT.title}</h2>
      <p style={{font:'400 23px/1.15 var(--font-body)',color:'var(--text-accent)',margin:'0 0 18px'}}>{WORKOUT.sub}</p>
      <ProgressSegments total={WORKOUT.total} done={doneCount} />
      <DayStrip value={day} done={[0,1,2,3]} onChange={setDay} />

      <div style={{display:'flex',gap:8,margin:'20px 0 0',overflowX:'auto',paddingBottom:4}}>
        {WORKOUT.moves.map((x,i)=>(
          <button key={i} className="ys-chip" aria-pressed={i===move} onClick={()=>{setMove(i);setCur(0)}} style={{whiteSpace:'nowrap'}}>{i+1}</button>
        ))}
      </div>

      <h3 style={{fontSize:'var(--text-2xl)',margin:'22px 0 6px'}}>{m.name}</h3>
      <div style={{font:'var(--type-metric)',color:'var(--text-accent)',marginBottom:14}}>{m.reps}</div>
      <p style={{font:'var(--type-body)',color:'var(--text-body)',marginBottom:22}}>{m.desc}</p>

      <SetTable sets={sets} current={cur} onSelect={(i)=>{setCur(i);setReps(Number(sets[i].reps)||1);setSheet(true)}} />
      <Aside>{WORKOUT.aside}</Aside>
      <Button size="lg" block onClick={()=>setSheet(true)}>LOG SET</Button>
      <button className="ys-btn ys-btn--plain" style={{width:'100%',marginTop:10}} onClick={onOpenPhase}>See the whole phase ›</button>
    </div>

    <Sheet open={sheet} title={`Set ${cur+1} · ${m.name}`} onClose={()=>setSheet(false)}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:20}}>
        <span className="ys-eyebrow">Reps</span><Stepper value={reps} onChange={setReps} />
      </div>
      <Button size="lg" block onClick={save}>SAVE SET</Button>
    </Sheet>

    <ActionSheet open={actions} onCancel={()=>setActions(false)} onSelect={(v)=>{if(v==='clear')setLogged({});setActions(false)}}
      actions={[{value:'swap',label:'Swap this exercise'},{value:'skip',label:'Skip today'},{value:'clear',label:'Clear all sets',danger:true}]} />

    {toast ? <div style={{position:'absolute',bottom:96,left:0,right:0,display:'flex',justifyContent:'center',zIndex:60}}><Toast tone="done">{toast}</Toast></div> : null}
  </>);
}
Object.assign(window,{ TodayScreen });

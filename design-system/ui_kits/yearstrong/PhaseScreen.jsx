const { NavBar, Eyebrow, MacroGrid, ListGroup, Card, ProgressSegments, Aside } = window.BrightStudioDesignSystem_8199fe;

const PHASES=[
  {n:'01', range:'Months 1—3', title:'Build the patterns', state:'Now', done:4, total:12},
  {n:'02', range:'Months 4—6', title:'Push the cut', state:'Next', done:0, total:12},
  {n:'03', range:'Months 7—9', title:'Diet break & recomp', state:'', done:0, total:12},
  {n:'04', range:'Months 10—12', title:'Final reveal', state:'', done:0, total:12},
];

function PhaseScreen({ onBack }){
  return (<>
    <NavBar back="Today" onBack={onBack} title="The year" />
    <div className="ys-screen">
      <Eyebrow>Months 1—3 · 12 weeks · week 4</Eyebrow>
      <h2 style={{fontSize:'var(--text-2xl)',margin:'12px 0 4px'}}>Show up five times a week.</h2>
      <p style={{font:'400 21px/1.2 var(--font-body)',color:'var(--text-accent)',margin:'0 0 18px'}}>Build the patterns.</p>
      <p style={{font:'var(--type-body)',marginBottom:20}}>Five strength days, Mon–Fri. Weekends are tennis, golf, hiking. Your job is to lift consistently, hit protein, and log every set.</p>
      <MacroGrid items={[{label:'Protein',value:'120 g'},{label:'Lift days',value:'5 / wk'},{label:'Target',value:'−0.7 lb'}]} />
      <div style={{marginTop:22,display:'grid',gap:14}}>
        {PHASES.map((p)=>(
          <Card key={p.n} tone={p.state==='Now'?'card':'sunken'}>
            <div style={{display:'flex',alignItems:'baseline',gap:10}}>
              <span style={{font:'var(--type-metric)',color:p.state==='Now'?'var(--text-accent)':'var(--text-muted)'}}>{p.n}</span>
              <Eyebrow>{p.range}</Eyebrow>
              {p.state ? <span style={{marginLeft:'auto',font:'var(--type-label)',letterSpacing:'var(--track-wide)',color:p.state==='Now'?'var(--text-accent)':'var(--text-muted)'}}>{p.state.toUpperCase()}</span> : null}
            </div>
            <h3 style={{fontSize:'var(--text-lg)',margin:'8px 0 12px'}}>{p.title}</h3>
            <ProgressSegments total={p.total} done={p.done} tone={p.state==='Now'?'action':'ref'} />
          </Card>
        ))}
      </div>
      <div style={{marginTop:22}}>
        <ListGroup label="This phase" rows={[
          {label:'Protein target', value:'120 g'},
          {label:'Hydration', value:'2.5 L'},
          {label:'Weekend', value:'Tennis · golf'},
          {label:'Loss target', value:'~0.7 lb/wk'},
        ]} />
      </div>
      <Aside>Four good workouts a week for fifty weeks beats five perfect ones for twelve.</Aside>
    </div>
  </>);
}
Object.assign(window,{ PhaseScreen });

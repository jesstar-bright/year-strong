const { NavBar, LargeTitle, RefCard, FilterChips, Eyebrow, SearchField, Aside } = window.BrightStudioDesignSystem_8199fe;

const REFS=[
  {tag:'iron', title:'Vitamin C with every plant-iron meal', body:'Across 299 subjects, absorption rose in direct proportion to ascorbic acid; 50 mg per main meal was the stated point of practical optimum.', cite:'Hallberg, Brune & Rossander 1986, Hum Nutr Appl Nutr 40:97'},
  {tag:'iron', title:'A little meat lifts the plants', body:'Against an equal amount of egg protein, beef muscle raised non-haem absorption 180% and chicken 100%.', cite:'Hurrell, Reddy, Juillerat & Cook 2006, J Nutr 136:2808'},
  {tag:'insulin', title:'Legumes as the carbohydrate', body:'A cup of legumes a day for three months lowered HbA1c by 0.5% against a high-wheat-fibre control in 121 people. Best-evidenced single change on the list.', cite:'Jenkins 2012, Arch Intern Med 172:1653'},
  {tag:'insulin', title:'The ten-minute walk', body:'Ten minutes of walking after each meal lowered post-meal glucose about 12% — and about 22% after the evening meal.', cite:'Reynolds 2016, Diabetologia'},
  {tag:'lifting', title:'Resistance training protects lean mass', body:'On GLP-1 therapy, lean mass was 17.5% of total weight lost with lifting versus 25.4% without.', cite:'Eisa 2026, Diabetes Obes Metab'},
];

function ReferenceScreen({ onBack }){
  const [f,setF]=React.useState('All');
  const [q,setQ]=React.useState('');
  const list=REFS.filter(r=>(f==='All'||r.tag===f.toLowerCase())&&(!q||(r.title+r.body).toLowerCase().includes(q.toLowerCase())));
  return (<>
    <NavBar back="Food" onBack={onBack} title="Reference" />
    <div className="ys-screen">
      <LargeTitle style={{padding:'4px 0 10px'}}>Reference</LargeTitle>
      <Aside>Ranked by how good the evidence is, not by how good it sounds.</Aside>
      <div style={{margin:'0 0 16px'}}><SearchField placeholder="Search the evidence" value={q} onChange={setQ} /></div>
      <FilterChips tone="ref" items={['All','Iron','Insulin','Lifting']} value={f} onChange={setF} />
      <div style={{display:'grid',gap:14,marginTop:18}}>
        {list.map((r,i)=>(<RefCard key={i} title={r.title} cite={r.cite}>{r.body}</RefCard>))}
        {list.length===0 ? <Eyebrow>Nothing matches that.</Eyebrow> : null}
      </div>
    </div>
  </>);
}
Object.assign(window,{ ReferenceScreen });

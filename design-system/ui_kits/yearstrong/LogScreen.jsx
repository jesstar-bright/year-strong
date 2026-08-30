const { LargeTitle, SegmentedControl, StatCard, Card, Eyebrow, Menu, ListGroup } = window.BrightStudioDesignSystem_8199fe;

const WEEKS=[34,52,44,68,61,83,100];

function LogScreen(){
  const [range,setRange]=React.useState('Week');
  const [menu,setMenu]=React.useState(false);
  const [sort,setSort]=React.useState('recent');
  return (
    <div className="ys-screen">
      <div style={{display:'flex',alignItems:'center'}}>
        <LargeTitle style={{padding:'8px 0 12px'}}>Log</LargeTitle>
        <button className="ys-btn ys-btn--plain ys-btn--sm" style={{marginLeft:'auto'}} onClick={()=>setMenu(!menu)}>Sort ⌄</button>
      </div>
      {menu ? (
        <div style={{position:'relative',zIndex:30}}>
          <div style={{position:'absolute',right:0,top:0}}>
            <Menu value={sort} onSelect={(v)=>{setSort(v);setMenu(false)}} items={[
              {value:'recent',label:'Most recent'},
              {value:'heavy',label:'Heaviest first'},
              {value:'az',label:'A–Z'},
              {label:'Delete last entry',danger:true},
            ]} />
          </div>
        </div>
      ) : null}
      <SegmentedControl items={['Week','Month','Year']} value={range} onChange={setRange} />

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,margin:'20px 0'}}>
        <StatCard label="Streak" value="17" sub="days in a row" />
        <StatCard label="Weight" value="152.4" sub="−0.8 this week" done />
        <StatCard label="Pull-up" value="2 / 5" sub="strict reps" />
        <StatCard label="Protein" value="88g" sub="of 120 today" />
      </div>

      <Card>
        <Eyebrow>Volume · last 7 weeks</Eyebrow>
        <div style={{display:'flex',alignItems:'flex-end',gap:8,height:120,marginTop:14}}>
          {WEEKS.map((h,i)=>(
            <i key={i} style={{flex:1,height:`${h}%`,background:i===WEEKS.length-1?'var(--pink)':'var(--sage)',border:'2px solid var(--border-strong)',borderRadius:'6px 6px 0 0'}} />
          ))}
        </div>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:8}}>
          <Eyebrow>W1</Eyebrow><Eyebrow>W7</Eyebrow>
        </div>
      </Card>

      <div style={{marginTop:20}}>
        <ListGroup label="Recent sessions" rows={[
          {label:'Sun · Reset', value:'8 of 8'},
          {label:'Sat · Open', value:'8 of 8'},
          {label:'Fri · Upper push', value:'9 of 9'},
          {label:'Thu · Lower hinge', value:'6 of 6'},
        ]} />
      </div>
    </div>
  );
}
Object.assign(window,{ LogScreen });

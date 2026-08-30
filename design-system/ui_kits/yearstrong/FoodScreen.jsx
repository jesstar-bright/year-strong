const { LargeTitle, Eyebrow, MacroGrid, FilterChips, MealRow, RefCard, Card, SearchField, Aside } = window.BrightStudioDesignSystem_8199fe;

function FoodScreen({ onOpenRecipe, onOpenReference }){
  const [f,setF]=React.useState('All');
  const [q,setQ]=React.useState('');
  return (
    <div className="ys-screen">
      <LargeTitle style={{padding:'8px 0 12px'}}>Food</LargeTitle>
      <Eyebrow>Daily nutrition · revised 29 Aug</Eyebrow>
      <p style={{font:'var(--type-body)',margin:'12px 0 18px'}}>Built around your tolerated foods. No cow whey, no tomatoes, no wheat, no nuts, no soy.</p>
      <MacroGrid items={[{label:'Protein',value:'120 g'},{label:'Meals',value:'3 × 40'},{label:'Walk',value:'10 min'}]} />
      <div style={{margin:'18px 0'}}><SearchField placeholder="Search recipes" value={q} onChange={setQ} /></div>
      <FilterChips items={['All','10 min','High iron','Rescue']} value={f} onChange={setF} />
      <Card tone="flat" style={{padding:'4px 0 0',marginTop:18}}>
        {MEALS.map((m,i)=>(
          <MealRow key={i} time={m.time} tag={m.tag} name={m.name} alts={m.alts} options={m.options} onClick={onOpenRecipe} />
        ))}
      </Card>
      <Aside>Coffee after breakfast, not with it. The pepper is the working ingredient, not a garnish.</Aside>
      <div onClick={onOpenReference} style={{cursor:'pointer'}}>
        <RefCard title="Iron rule" cite="Morck, Lynch & Cook 1983, AJCN 37:416">
          Coffee an hour <i>before</i> the meal is free. An hour <i>after</i> costs you about 39%. <span style={{color:'var(--text-ref)',fontWeight:800}}>All reference ›</span>
        </RefCard>
      </div>
    </div>
  );
}
Object.assign(window,{ FoodScreen });

const { NavBar, Eyebrow, MacroGrid, RefCard, Checklist, Button, Aside, Card, Toast } = window.BrightStudioDesignSystem_8199fe;

const ING = [
  '4 oz cooked sirloin, sliced thin across the grain',
  '2 large eggs',
  '1 whole red bell pepper, quartered — ~150 mg vit C',
  '¼ cup flat-leaf parsley, chopped fine',
  '1 garlic clove, minced',
  '2 tsp olive oil + 1 tsp for the pan',
  '150 g cooled boiled potatoes, halved',
];
const METHOD = [
  'Dry skillet on high. Char the pepper quarters skin-down 4 min until blackened in patches.',
  'Chimichurri: parsley, garlic, vinegar, olive oil, chilli, salt. Stir in a mug. Thirty seconds.',
  'Same pan, 1 tsp oil. Potatoes cut-side down, 4 min undisturbed, until they take colour.',
  'Lay the sliced steak in for 45 seconds a side — you are warming it, not cooking it again.',
  'Push aside, crack the eggs in, lid on 2 min for set whites and runny yolks.',
  'Plate: peppers, steak, eggs. Chimichurri over everything.',
];

function RecipeScreen({ onBack }){
  const [ing,setIng]=React.useState(ING.map(l=>({label:l})));
  const [toast,setToast]=React.useState(null);
  return (<>
    <NavBar back="Food" onBack={onBack} action={<button className="ys-btn ys-btn--plain ys-btn--sm">Save</button>} />
    <div className="ys-screen">
      <Eyebrow>Recipe B1 · Monday, from Sunday's steak</Eyebrow>
      <h2 style={{fontSize:'var(--text-2xl)',margin:'12px 0 8px'}}>Steak &amp; eggs with charred red pepper chimichurri</h2>
      <Eyebrow>07:30 · 12 min · serves 1 · one pan</Eyebrow>
      <p style={{font:'var(--type-body)',margin:'16px 0 20px'}}>The steak is already cooked, so this is a reheat and two eggs. Haem iron from beef next to a whole charred red pepper — 150&nbsp;mg of vitamin C in the same pan.</p>
      <MacroGrid items={[{label:'Protein',value:'48 g'},{label:'Calories',value:'610'},{label:'Carbs',value:'38 g'}]} />
      <div style={{height:12}} />
      <MacroGrid items={[{label:'Fat',value:'30 g'},{label:'Iron',value:'5.1 mg',accent:true},{label:'Vit C',value:'170 mg',accent:true}]} />
      <div style={{margin:'22px 0'}}>
        <RefCard title="Iron rule" cite="Morck, Lynch & Cook 1983, AJCN 37:416">
          Egg iron is non-haem and yolk phosvitin binds it hard, so the pepper is the working ingredient. Coffee before is free; within an hour after costs ~39%.
        </RefCard>
      </div>
      <h3 style={{fontSize:'var(--text-xl)',margin:'0 0 10px'}}>Ingredients</h3>
      <Checklist items={ing} onToggle={(i)=>setIng(ing.map((x,j)=>j===i?{...x,done:!x.done}:x))} />
      <h3 style={{fontSize:'var(--text-xl)',margin:'24px 0 10px'}}>Method</h3>
      <ol style={{margin:0,paddingLeft:0,listStyle:'none',display:'grid',gap:13}}>
        {METHOD.map((s,i)=>(
          <li key={i} style={{display:'flex',gap:13}}>
            <span style={{flex:'none',width:27,height:27,border:'2.5px solid var(--border-strong)',borderRadius:999,display:'grid',placeItems:'center',font:'var(--type-label)',color:'var(--text-strong)'}}>{i+1}</span>
            <span style={{font:'var(--type-small)'}}>{s}</span>
          </li>
        ))}
      </ol>
      <Aside>Do not skip the eight-minute rest. Cut it early and the juice is on the board instead of in you.</Aside>
      <Button size="lg" block onClick={()=>{setToast('logged to today');setTimeout(()=>setToast(null),1900)}}>LOG THIS MEAL</Button>
    </div>
    {toast ? <div style={{position:'absolute',bottom:96,left:0,right:0,display:'flex',justifyContent:'center',zIndex:60}}><Toast tone="done">{toast}</Toast></div> : null}
  </>);
}
Object.assign(window,{ RecipeScreen });

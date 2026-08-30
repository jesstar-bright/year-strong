const { TabBar, Eyebrow } = window.BrightStudioDesignSystem_8199fe;

function StatusBar(){
  return (<div className="ys-status"><span>9:41</span><span style={{letterSpacing:'2px'}}>▪▪▪ ⌁ ▮</span></div>);
}

/** The phone frame everything renders inside. position:relative so sheets can anchor. */
function Phone({ children, tab, onTab, hideTabs }){
  return (
    <div className="ys-phone">
      <StatusBar />
      {children}
      {hideTabs ? null : (
        <TabBar value={tab} onChange={onTab} items={[
          {value:'today',label:'TODAY'},
          {value:'food',label:'FOOD'},
          {value:'log',label:'LOG'},
          {value:'notes',label:'NOTES',tone:'ref'},
        ]} />
      )}
    </div>
  );
}

const WORKOUT = {
  day:'DAY G · SUNDAY', title:'Reset', sub:'flow, balance & control',
  aside:'No load, no score — go to the first honest resistance and breathe there.',
  moves:[
    {name:'Sun salutation A', reps:'4 × 1 round', sets:4,
     desc:'Mountain → forward fold → half lift → plank → chaturanga or knees → up dog → down dog. One breath per movement. Round one is a warm-up; by round four you are actually moving.'},
    {name:'Low lunge ⇄ half splits', reps:'3 × 5/side', sets:3,
     desc:'Rock forward into the lunge, then shift back over the straight front leg with a flat back. Hip flexor one way, hamstring the other.'},
    {name:'Tree pose', reps:'3 × 30 sec/side', sets:3,
     desc:'Foot above or below the knee, never on it. Closing your eyes on the last set removes vision and forces the hip and ankle to balance.'},
    {name:'Warrior II → reverse → side angle', reps:'2 × 3/side', sets:2,
     desc:'Front knee over the ankle, back foot flat and turned in, hips open. Five slow breaths in each shape before you move. Isometric glute and adductor work disguised as yoga.'},
    {name:'Bird dog — 5s hold', reps:'3 × 8/side', sets:3,
     desc:'Balance a water bottle on your low back and do not let it fall. Reach long rather than high. Anti-rotation for the deep core, at a speed you can actually feel.'},
    {name:'Side plank — knees down if needed', reps:'3 × 30 sec/side', sets:3,
     desc:'Stack the shoulder over the elbow, lift the bottom ribs away from the floor. Quadratus lumborum and glute medius — the two muscles that keep hips level.'},
    {name:'Glute bridge march — slow', reps:'3 × 10/side', sets:3,
     desc:'Bridge up, ribs down, then lift one knee without letting that hip drop an inch. Two seconds up, two seconds down. Wakes the glutes for Monday without fatiguing them.'},
    {name:'Child\'s pose → supine twist → still', reps:'1 × 20 breaths', sets:1,
     desc:'Knees wide, then knees to one side and look the other way. Finish flat on your back doing nothing for two minutes. Sunday ends the week and starts it.'},
  ],
};
WORKOUT.total = WORKOUT.moves.length;

const MEALS = [
  {time:'07:30', tag:'40 G · IRON', name:'Turkey hash', alts:'salmon hash · turkey bowl · warm oats',
   options:[{key:'A',text:'Turkey, spinach & red pepper hash with pepitas'},{key:'B',text:'Salmon + sweet potato hash with spinach'},{key:'C',text:'Ground turkey + rice + zucchini bowl'}]},
  {time:'12:30', tag:'40 G', name:'Steak & pepper bowl', alts:'salmon · shrimp · wraps',
   options:[{key:'A',text:"Monday steak & pepper bowl, from Sunday's batch"},{key:'B',text:'Lemon-dill salmon, smashed potatoes, spinach'},{key:'C',text:'Garlic shrimp with rice, peppers, zucchini'}]},
  {time:'19:00', tag:'40 G', name:'Sunday batch skillet', alts:'steak · ginger shrimp · meatballs',
   options:[{key:'A',text:'Sunday steak & pepper batch skillet — cook triple'},{key:'B',text:'Sirloin + roasted baby potatoes + garlicky greens'}]},
];

Object.assign(window,{ Phone, StatusBar, WORKOUT, MEALS });

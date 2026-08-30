const { Button, Eyebrow, ListGroup, Stepper, SegmentedControl, Switch, Aside, ProgressSegments } = window.BrightStudioDesignSystem_8199fe;

function OnboardingScreen({ onDone }){
  const [step,setStep]=React.useState(0);
  const [protein,setProtein]=React.useState(120);
  const [days,setDays]=React.useState('5');
  const [dark,setDark]=React.useState(false);
  const next=()=>step<2?setStep(step+1):onDone();
  return (
    <div className="ys-screen" style={{display:'flex',flexDirection:'column'}}>
      <div style={{padding:'20px 0 0'}}><ProgressSegments total={3} done={step+1} /></div>
      {step===0 && (<div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center'}}>
        <img src="../../assets/logo/icon-sage-render.png" width="132" height="132" alt="" style={{borderRadius:'23.5%',margin:'0 auto 24px'}} />
        <h2 style={{fontSize:'var(--text-3xl)',margin:'0 0 6px'}}>Year Strong</h2>
        <p style={{font:'400 21px/1.2 var(--font-body)',color:'var(--text-accent)',margin:'0 auto 16px'}}>twelve months, five days a week</p>
        <p style={{font:'var(--type-body)',margin:'0 auto'}}>Lift consistently, hit protein, log every set. The plan handles the rest.</p>
      </div>)}
      {step===1 && (<div style={{flex:1,paddingTop:28}}>
        <Eyebrow>Step 2 of 3</Eyebrow>
        <h2 style={{fontSize:'var(--text-2xl)',margin:'12px 0 20px'}}>Your targets</h2>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:20}}>
          <span style={{font:'var(--type-strong)'}}>Protein, g/day</span><Stepper value={protein} step={5} onChange={setProtein} />
        </div>
        <span className="ys-list__label">Lift days per week</span>
        <SegmentedControl items={['3','4','5','6']} value={days} onChange={setDays} />
        <Aside>Five is the plan. Four still works. Three is maintenance, not progress.</Aside>
      </div>)}
      {step===2 && (<div style={{flex:1,paddingTop:28}}>
        <Eyebrow>Step 3 of 3</Eyebrow>
        <h2 style={{fontSize:'var(--text-2xl)',margin:'12px 0 20px'}}>How it should behave</h2>
        <ListGroup rows={[
          {label:'Remind me to lift', value:'6:00 AM'},
          {label:'Remind me to walk', value:'After dinner'},
          {label:'Weigh-in', value:'Daily'},
        ]} />
        <div style={{marginTop:20}}><Switch checked={dark} label="Start in dark mode" onChange={setDark} /></div>
      </div>)}
      <div style={{paddingBottom:20}}>
        <Button size="lg" block onClick={next}>{step<2?'CONTINUE':'START THE YEAR'}</Button>
        {step<2 ? <button className="ys-btn ys-btn--plain" style={{width:'100%',marginTop:8}} onClick={onDone}>Skip setup</button> : null}
      </div>
    </div>
  );
}
Object.assign(window,{ OnboardingScreen });

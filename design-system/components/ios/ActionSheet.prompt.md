Use `ActionSheet` when a tap has two to four possible outcomes and one may be destructive.

```jsx
<ActionSheet open={open} onCancel={close} onSelect={run} actions={[
  {value:'swap',label:'Swap this exercise'},
  {value:'skip',label:'Skip today'},
  {value:'clear',label:'Clear all sets', danger:true},
]} />
```

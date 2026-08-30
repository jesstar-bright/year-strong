Use `TabBar` as the app's root navigation. It sits below the safe-area inset automatically.

```jsx
<TabBar value={tab} onChange={setTab}
  items={[{value:'today',label:'TODAY'},{value:'food',label:'FOOD'},{value:'notes',label:'NOTES',tone:'ref'}]} />
```

Give Notes `tone="ref"` so the reflective tab indicates sage — the one place the rule bends deliberately.

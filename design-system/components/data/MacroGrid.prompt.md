Use `MacroGrid` for the numbers under a recipe or at the top of the Food tab. Three per row.

```jsx
<MacroGrid items={[{label:'Protein',value:'48 g'},{label:'Iron',value:'5.1 mg',accent:true}]} />
```

If a number is not worth reading, delete it. `accent` turns a chip sage — use it for the metric that is the point of the dish.

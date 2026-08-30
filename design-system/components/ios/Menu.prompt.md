Use `Menu` for a dropdown (sort order, phase picker) or a long-press context menu on a row.

```jsx
<Menu value={sort} onSelect={setSort} items={[
  {value:'recent',label:'Most recent'},
  {value:'heavy',label:'Heaviest first'},
  {label:'Delete entry', danger:true},
]} />
```

Destructive items go last and take `danger`. Three to six items — beyond that use a Sheet.

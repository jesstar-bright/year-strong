Use `ListGroup` for settings, phase lists, and anything that is a list of navigable things.

```jsx
<ListGroup label="Program" rows={[
  {label:'Phase', value:'Months 1—3'},
  {label:'Protein target', value:'120 g'},
]} />
```

Rows are 56px, above the 44px HIG minimum. Put a value on the right, or a chevron, not both unless the value is short.

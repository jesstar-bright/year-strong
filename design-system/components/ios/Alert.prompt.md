Use `Alert` only when something is about to be lost.

```jsx
<Alert open={open} title="Clear this week?" message="Every logged set goes. There is no undo."
  actions={[{value:'no',label:'Keep it'},{value:'yes',label:'Clear', danger:true}]} onSelect={handle} />
```

Never use an Alert to confirm success — that is a Toast.

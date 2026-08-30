Use `ProgressSegments` whenever the total is a small countable number — exercises in a day, days in a week.

```jsx
<ProgressSegments total={8} done={3} />
```

Never animate it filling on load; it should already reflect reality when the screen appears.

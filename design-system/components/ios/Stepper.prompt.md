Use `Stepper` wherever a number is adjusted by small amounts.

```jsx
<Stepper value={reps} onChange={setReps} />
<Stepper value={load} step={5} unit=" lb" onChange={setLoad} />
```

Both buttons are 44px wide — thumb-reachable mid-set.

Use `Sheet` for editing a set, picking a meal, adding a note — anything that is not a whole new screen.

```jsx
<Sheet open={open} title="Log this set" onClose={close}>
  <Stepper value={reps} onChange={setReps} />
  <Button block size="lg">SAVE</Button>
</Sheet>
```

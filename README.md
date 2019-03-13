# Tuple Utils

Mimic tuple behavior of other language [key, val].

## functions

### `toObject<T>(tuple: IKeyValTuple<T> | IKeyValTuple<T>[]): T`

```typescript
type fooType = { a: string; b: string };

const tupleList: IKeyValTuple<fooType>[] = [['a', 'a'], ['b', 'b']];

expect(toObject(tupleList)).toEqual({ a: 'a', b: 'b' });
```

# Tuple Utils
![Node.js CI](https://github.com/AgentOneCoLtd/tuple/workflows/Node.js%20CI/badge.svg)

Mimic tuple behavior of other language [key, val].

## Functions

### `toObject<T>(tuple: IKeyValTuple<T> | IKeyValTuple<T>[]): T`

```typescript
type fooType = { a: string; b: string };

const tupleList: IKeyValTuple<fooType>[] = [['a', 'a'], ['b', 'b']];

expect(toObject(tupleList)).toEqual({ a: 'a', b: 'b' });
```

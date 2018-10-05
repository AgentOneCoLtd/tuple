import { IKeyValTuple, toObject } from './index';

it('should get { a: "a", b: "b" }', () => {
    type fooType = { a: string; b: string };

    const tupleList: IKeyValTuple<fooType>[] = [['a', 'a'], ['b', 'b']];

    expect(toObject(tupleList)).toEqual({ a: 'a', b: 'b' });
});

it('should get {}', () => {
    const tupleList: IKeyValTuple[] = [];

    expect(toObject(tupleList)).toEqual({});
});

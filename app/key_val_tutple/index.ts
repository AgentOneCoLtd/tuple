/* tslint:disable: prefer-object-spread */

export enum KeyValTupleIndex {
    KEY = 0,
    VAL = 1,
}

export interface IKeyValTuple<T = {}> {
    [KeyValTupleIndex.KEY]: keyof T; // key
    [KeyValTupleIndex.VAL]: any; // val
}

export function toObject<T>(tuple: IKeyValTuple<T> | IKeyValTuple<T>[]): T {
    const tupleList = Array.isArray(tuple) ? tuple : [tuple];

    const reducer = (sum: T, tuple: IKeyValTuple<T>) =>
        Object.assign(sum, { [tuple[KeyValTupleIndex.KEY]]: tuple[KeyValTupleIndex.VAL] });

    return tupleList.reduce(reducer, {} as T);
}

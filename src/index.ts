export enum KeyValTupleIndex {
    KEY = 0,
    VAL = 1,
}

export interface IKeyValTuple<T = {}> {
    [KeyValTupleIndex.KEY]: keyof T; // key
    // tslint:disable-next-line no-any
    [KeyValTupleIndex.VAL]: any; // val
}

export function toObject<T>(tupleList: IKeyValTuple<T>[]): T {
    const reducer = (sum: T, current: IKeyValTuple<T>) => ({
        ...sum,
        [current[KeyValTupleIndex.KEY]]: current[KeyValTupleIndex.VAL],
    });

    // tslint:disable-next-line no-object-literal-type-assertion
    return tupleList.reduce(reducer, <T>{});
}

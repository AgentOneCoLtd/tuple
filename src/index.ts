export enum KeyValTupleIndex {
    KEY = 0,
    VAL = 1,
}

export interface IKeyValTuple<T = {}> {
    [KeyValTupleIndex.KEY]: keyof T; // key
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [KeyValTupleIndex.VAL]: any; // val
}

export function toObject<T>(tupleList: IKeyValTuple<T>[]): T {
    const reducer = (sum: T, current: IKeyValTuple<T>): T => ({
        ...sum,
        [current[KeyValTupleIndex.KEY]]: current[KeyValTupleIndex.VAL],
    });

    return tupleList.reduce(reducer, ({} as unknown) as T);
}

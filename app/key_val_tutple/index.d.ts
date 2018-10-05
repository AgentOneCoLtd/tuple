export declare enum KeyValTupleIndex {
    KEY = 0,
    VAL = 1
}
export interface IKeyValTuple<T = {}> {
    [KeyValTupleIndex.KEY]: keyof T;
    [KeyValTupleIndex.VAL]: any;
}
export declare function toObject<T>(tuple: IKeyValTuple<T> | IKeyValTuple<T>[]): T;

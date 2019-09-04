export var KeyValTupleIndex;
(function (KeyValTupleIndex) {
    KeyValTupleIndex[KeyValTupleIndex["KEY"] = 0] = "KEY";
    KeyValTupleIndex[KeyValTupleIndex["VAL"] = 1] = "VAL";
})(KeyValTupleIndex || (KeyValTupleIndex = {}));
export function toObject(tupleList) {
    const reducer = (sum, current) => ({
        ...sum,
        [current[KeyValTupleIndex.KEY]]: current[KeyValTupleIndex.VAL],
    });
    return tupleList.reduce(reducer, {});
}
//# sourceMappingURL=index.js.map
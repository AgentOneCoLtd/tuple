"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KeyValTupleIndex;
(function (KeyValTupleIndex) {
    KeyValTupleIndex[KeyValTupleIndex["KEY"] = 0] = "KEY";
    KeyValTupleIndex[KeyValTupleIndex["VAL"] = 1] = "VAL";
})(KeyValTupleIndex = exports.KeyValTupleIndex || (exports.KeyValTupleIndex = {}));
function toObject(tupleList) {
    const reducer = (sum, current) => (Object.assign(Object.assign({}, sum), { [current[KeyValTupleIndex.KEY]]: current[KeyValTupleIndex.VAL] }));
    return tupleList.reduce(reducer, {});
}
exports.toObject = toObject;
//# sourceMappingURL=index.js.map
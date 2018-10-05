"use strict";
/* tslint:disable: prefer-object-spread */
Object.defineProperty(exports, "__esModule", { value: true });
var KeyValTupleIndex;
(function (KeyValTupleIndex) {
    KeyValTupleIndex[KeyValTupleIndex["KEY"] = 0] = "KEY";
    KeyValTupleIndex[KeyValTupleIndex["VAL"] = 1] = "VAL";
})(KeyValTupleIndex = exports.KeyValTupleIndex || (exports.KeyValTupleIndex = {}));
function toObject(tuple) {
    const tupleList = Array.isArray(tuple) ? tuple : [tuple];
    const reducer = (sum, tuple) => Object.assign(sum, { [tuple[KeyValTupleIndex.KEY]]: tuple[KeyValTupleIndex.VAL] });
    return tupleList.reduce(reducer, {});
}
exports.toObject = toObject;

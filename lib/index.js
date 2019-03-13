"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var KeyValTupleIndex;
(function (KeyValTupleIndex) {
    KeyValTupleIndex[KeyValTupleIndex["KEY"] = 0] = "KEY";
    KeyValTupleIndex[KeyValTupleIndex["VAL"] = 1] = "VAL";
})(KeyValTupleIndex = exports.KeyValTupleIndex || (exports.KeyValTupleIndex = {}));
function toObject(tupleList) {
    var reducer = function (sum, current) {
        var _a;
        return (__assign({}, sum, (_a = {}, _a[current[KeyValTupleIndex.KEY]] = current[KeyValTupleIndex.VAL], _a)));
    };
    // tslint:disable-next-line no-object-literal-type-assertion
    return tupleList.reduce(reducer, {});
}
exports.toObject = toObject;
//# sourceMappingURL=index.js.map
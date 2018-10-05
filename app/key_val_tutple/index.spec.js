"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
it('should get { a: "a", b: "b" }', () => {
    const tupleList = [['a', 'a'], ['b', 'b']];
    expect(index_1.toObject(tupleList)).toEqual({ a: 'a', b: 'b' });
});
it('should get {}', () => {
    const tupleList = [];
    expect(index_1.toObject(tupleList)).toEqual({});
});

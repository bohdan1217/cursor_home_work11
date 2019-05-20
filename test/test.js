const expect = require("chai").expect;
require("../script.js");

describe("Testing the iterator function", function () {
    it("testing starting point", function () {
        iterator.current();
        expect(iterator.current()).to.be.equal(0);
    });
    it("testing iterator.next method", function () {
        iterator.next();
        expect(iterator.next()).to.be.equal(1)
    });
    it("testing current key number", function () {
        iterator.key();
        expect(iterator.key()).to.be.equal(2)
    });
    it("testing iterator.previous method", function () {
        iterator.prev();
        expect(iterator.prev()).to.be.equal(1)
    });
    it("testing rewind method", function () {
        iterator.rewind();
        expect(iterator.current()).to.be.equal(0)
    });
});
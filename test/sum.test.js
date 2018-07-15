const { describe, it } = require("mocha")
const { expect } = require("chai")
const sum = require("../src/sum")

describe("sum", function(){
  it("should sum the numbers in an array", function(){
    expect(sum([1,2,3,4])).to.equal(10)
  })
})

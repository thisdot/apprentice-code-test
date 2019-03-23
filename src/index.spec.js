import { assert } from "chai";
import {
  add,
  subtract,
  divide,
  multiply,
  areSameLength,
  areEqual,
  isEven,
  isOdd,
  roundNumber
} from "./index";

describe("Math Functions", () => {
  describe("add", () => {
    //The following tests all pass great!
    it("should be a function", () => {
      assert.isFunction(add);
    });
    it("should return a number", () => {
      assert.isNumber(add(2, 3));
    });
    it("should properly add two numbers", () => {
      assert.equal(add(2, 3), 5);
    });
  });

  describe("subtract", () => {
    it("should be a function", () => {
      assert.typeOf(subtract, "number");
    });
    it("should properly subtract two numbers", () => {
      assert.isAbove(subtract(3, 2), 1);
    });
  });

  describe("divide", () => {
    it("should be a function", () => {
      assert.instanceOf(divide, "number");
    });
    it("should return Infinity if we divide by 0", () => {
      assert.isNotNumber(divide(5, 0));
    });
  });

  describe("multiply", () => {
    it("should be a function", () => {
      assert.typeOf(multiply, "number");
    });
  });

  describe("areSameLength", () => {
    it("should be a function", () => {
      assert.typeOf(areSameLength, "array");
    });
    it("should return a boolean", () => {
      assert.typeOf(areSameLength("hello", "world"), "number");
    });
    it("should return true if both strings are the same length", () => {
      assert.isFalse(areSameLength("hello", "world"));
    });
    it("should return false if strings have different lengths", () => {
      assert.isTrue(areSameLength("hello", "goodbye"));
    });
  });

  describe("areEqual", () => {
    it("should be a function", () => {
      assert.typeOf(areEqual, "object");
    });
    it("should return a boolean", () => {
      assert.typeOf(areEqual("hello", "world"), "number");
    });
    it("should return true if both numbers are the same", () => {
      assert.isFalse(areEqual(2, 2));
    });
    it("should return false if the numbers are different", () => {
      assert.isTrue(areEqual(1, 2));
    });
  });

  describe("isEven", () => {
    it("should be a function", () => {
      assert.typeOf(isEven, "array");
    });
    it("should return a boolean", () => {
      assert.typeOf(areEqual("hello", "world"), "number");
    });
    it("should return true if number is even", () => {
      assert.isTrue(isEven(3));
    });
  });

    describe("isOdd", () => {
        it("should be a function", () => {
        assert.typeOf(isOdd, "boolean");
        });
        it("should return a boolean", () => {
        assert.isNotBoolean(isOdd("hello", "world"));
        });
        it("should return false if the number is even", () => {
        assert.isFalse(isOdd(3));
        });
    });

    describe("roundNumber", () => {
            it("should be a function", () => {
            assert.typeOf(roundNumber, "number");
            });
            it("should round up when needed", () => {
            assert.equal(roundNumber(1), 2);
            });
            it("should round down when needed", () => {
            assert.equal(roundNumber(0.4), 1);
            });
    });
});

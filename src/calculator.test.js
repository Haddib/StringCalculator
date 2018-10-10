const add = require("./calculator");

it("should return zero on an empty string", () => {
  expect(add("")).toBe(0);
});

it("should return number when only that number is inserted into add()", () => {
  expect(add("5")).toBe(5);
});

it("should return the sum of the 2 numbers entered into add()", () => {
  expect(add("5,4")).toBe(9);
});

it("should return the sum of all the numbers entered into add()", () => {
  expect(add("5,4,3,2")).toBe(14);
});

it("should be able to handle both commas and new lines between numbers", () => {
  expect(add("5\n4,3\n10")).toBe(22);
});

it("should throw an exception if a negative number is entered", () => {
  function testAdd(){
    add("-1,2");
  }
  expect(testAdd).toThrow("Negatives not allowed: -1");
});

it("should throw an exception if many negative numbers are entered", () => {
  function testAdd(){
    add("2,-4,3,-5");
  }
  expect(testAdd).toThrow("Negatives not allowed: -4,-5");
});

it("should ignore numbers larger than 1000", () => {
  expect(add("5,1001,6")).toBe(11);
});

it("should be able to change the deilimiter", () => {
  expect(add("//;\n1;2")).toBe(3);
});

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

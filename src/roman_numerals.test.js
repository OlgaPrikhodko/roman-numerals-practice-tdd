const numToRoman = require("./roman_numerals");

test("convert 1 to I", () => {
  expect(numToRoman(1)).toBe("I");
});

test("convert 2 to II", () => {
  expect(numToRoman(2)).toBe("II");
});

test("convert 7 to VII", () => {
  expect(numToRoman(7)).toBe("VII");
});

test("convert 9 to IX", () => {
  expect(numToRoman(9)).toBe("IX");
});

test("convert 19 to XIX", () => {
  expect(numToRoman(19)).toBe("XIX");
});

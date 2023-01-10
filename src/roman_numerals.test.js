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

test("convert 49 to XLIX", () => {
  expect(numToRoman(49)).toBe("XLIX");
});

test("convert 99 to XCIX", () => {
  expect(numToRoman(99)).toBe("XCIX");
});

test("convert 309 to CCCIX", () => {
  expect(numToRoman(309)).toBe("CCCIX");
});

test("convert 527 to DXXVII", () => {
  expect(numToRoman(527)).toBe("DXXVII");
});

test("convert 789 to DCCLXXXIX", () => {
  expect(numToRoman(789)).toBe("DCCLXXXIX");
});

//     >>> roman(1888)
//     'MDCCCLXXXVIII'
//     >>> roman(1999)
//     'MCMXCIX'
//     >>> roman(2001)

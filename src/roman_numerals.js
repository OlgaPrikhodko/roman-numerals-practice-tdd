// The Kata says you should write a function to convert from normal numbers to Roman Numerals: eg

//      1 --> I
//      10 --> X
//      7 --> VII;

// I, V, X, L, C, D, M
const romans = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

// loop throgh reversed keys in romans
// if num / key = countRomans > 0 Math.floor
// countRomans * romans[key]

function numToRoman(num) {
  if (num in romans) {
    return romans[num];
  }

  let romanNumeral = "";

  // 2        1    I
  // 7        5    V
  for (let [key, romanSymbol] of Object.entries(romans).reverse()) {
    const countRomans = Math.floor(num / key); // 7/5=1  ; 2/1 = 2
    const remainder = num % key; // 2
    if (countRomans > 0) {
      romanNumeral += romanSymbol.repeat(countRomans); // II
      if (remainder > 0) {
        romanNumeral += numToRoman(remainder);
        break;
      }
    }
  }

  return romanNumeral;
}

module.exports = numToRoman;

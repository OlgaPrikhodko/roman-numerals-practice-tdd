type Romans = {
  [key: number]: string; 
}

const romans: Romans = {
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

const objectKeys = <Obj>(obj: Obj): (keyof Obj)[] => {
  if (obj) {
    return Object.keys(obj) as (keyof Obj)[];
  }

  return [];
}

export function numToRoman(num: number) {
  if (num in romans) {
    return romans[num];
  }

  let romanNumeral = "";

  for (let key of objectKeys(romans).reverse()) {
    const countRomans = Math.floor(num / key);
    const remainder = num % key;

    if (countRomans > 0) {
      romanNumeral += romans[key].repeat(countRomans);
      if (remainder > 0) {
        romanNumeral += numToRoman(remainder);
        break;
      }
    }
  }

  return romanNumeral;
}





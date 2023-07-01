function getRadix(number, radix) {
  const digits = getDigitTable();

  if (radix < 2 || radix >= digits.length || number <= 0) {
    console.log('Invalid args');
    // throw new Error('Invalid args');
  }

  let valueStr = '';

  while (number > 0) {
    valueStr = digits[number % radix] + valueStr;
    number = Math.floor(number / radix);
  }

  return valueStr;
}

function getDigitTable() {
  const digits = [];

  for (let i = '0'.charCodeAt(0); i <= '9'.charCodeAt(0); i++) {
    digits.push(String.fromCharCode(i));
  }

  for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    digits.push(String.fromCharCode(i));
  }
  return digits;
}

// console.log(getRadix(2023, 16));
// console.log(getRadix(255, 2));
// console.log(getRadix(23265656, 2));
// console.log(getRadix(23265656, 32));
// console.log(getRadix(11111111, 10));

function convertNumber(number, currentRadix, targetRadix) {
  const decimalValue = parseInt(number, currentRadix);
  return decimalValue.toString(targetRadix);
}

console.log(convertNumber(2023, 10, 2));

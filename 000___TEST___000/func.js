// Напишите функцию JavaScript, которая принимает строку в качестве параметра и находит самое длинное слово в строке.

// document.writeln(findlongestword('Web Development In Telran'));

function findlongestword(str) {
  // Создаем массив со спец. символами
  const arraySymbol = [' ', '.', ',', '!', '?', ':', ';', '/'];
  // Создаем переменную, в которую будут добавлятся буквы, формируя строку
  let check = '';
  // Создаем переменную, в которую будет записываться самая длинная строка
  let longestword = '';
  // Создаем цикл,с помощью которого,будем проходится по символам строки
  for (let i = 0; i < str.length; i++) {
    // Делаем проверку, с помощью тернарного оператора:
    // если итерируемый символ НЕ равен символу из массива arraySymbol,
    // тогда изменяй переменную check, конкатенирую к ней итерируемый символ
    !arraySymbol.includes(str[i]) ? (check += str[i]) : '';

    // Делаем проверку:
    // если итерируемый символ равен символу из массива arraySymbol,
    // и внутри этого условия создаем еще проверку:
    // если длина строки check > длины строки longestword,
    // тогда присвой longestword, значение переменной checkю
    if (arraySymbol.includes(str[i])) {
      check.length > longestword.length ? (longestword = check) : '';
      check = ''; // обнуляем переменную check
    }
  }
  return longestword;
}
console.log(findlongestword('Web Development In Telran'));

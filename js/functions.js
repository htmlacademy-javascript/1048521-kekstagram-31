
// Функция для проверки длины строки

function checkLengthString(str, maxLength) {
  return str.length <= maxLength;
}
checkLengthString('проверяемая строка', 18);
checkLengthString('проверяемая строка', 135);
checkLengthString('проверяемая строка', 10);


// Функция для проверки, является ли строка палиндромом

function isStringPalindrome(str) {
  const invertedStr = str.split('').reverse().join('').toLowerCase().replaceAll(' ', '');
  return str.toLowerCase().replaceAll(' ', '') === invertedStr;
}
isStringPalindrome('Лёша на полке клопа нашёл ');
isStringPalindrome('топот');
isStringPalindrome('ДовОд');
isStringPalindrome('Кекс');


// доп задание

function findNumber(str) {
  let string = '';

  for(let i = 0; i <= str.length - 1; i++) {
    const pars = Number.isNaN(parseInt(str[i], 10));
    if(pars === false) {
      string += str[i];
    }
  }
  return string;
}

findNumber('2023 год');
findNumber('ECMAScript 2022');
findNumber('1 кефир, 0.5 батона');
findNumber('агент 007');
findNumber('а я томат');


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


// Доьашнее задание "Функции возвращаются"
/*
Напишите функцию, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.

Время указывается в виде строки в формате часы:минуты. Для указания часов и минут могут использоваться как две цифры, так и одна. Например, 8 часов 5 минут могут быть указаны по-разному: 08:05, 8:5, 08:5 или 8:05.

Продолжительность задаётся числом. Гарантируется, что и рабочий день, и встреча укладываются в одни календарные сутки.

'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/


const convertingHoursMinutes = function(string) {

  const arr = string.split(':');
  arr[0] = Number(arr[0] * 60);

  const initialValue = 0;
  const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue),
    initialValue,
  );

  return sumWithInitial;
};


const calculateWorkingDay = function(beginningWorkDay, endWorkDay, startMeeting, durationMeeting) {

  const start = convertingHoursMinutes(beginningWorkDay);
  const end = convertingHoursMinutes(endWorkDay);
  const startMeetingTime = convertingHoursMinutes(startMeeting);

  if(startMeetingTime <= end && startMeetingTime >= start) {
    const checkingForDuration = end - startMeetingTime;

    if(checkingForDuration >= durationMeeting) {
      return true;
    }
  }

  return false;
};

calculateWorkingDay('08:00', '17:30', '14:00', 90); // true
calculateWorkingDay('8:0', '10:0', '8:0', 120); // true
calculateWorkingDay('08:00', '14:30', '14:00', 90); // false
calculateWorkingDay('14:00', '17:30', '08:0', 90); // false
calculateWorkingDay('8:00', '17:30', '08:00', 900); // false

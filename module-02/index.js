// =====================================task-01========================================

// const logItems = function(array) {
//   for (let i =0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]}`)
//   }
// }
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


// =====================================task-02========================================

// const calculateEngravingPrice = function(message, pricePerWord) {
  
//   const array = message.split(' ');
  
//   let costAllWord = array.length * pricePerWord;
//   return costAllWord;
// }

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// );
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus', 
//     20,
//   ),
// );
// console.log(
//   calculateEngravingPrice(
//     'Donec orci lectus aliquam est magnis', 
//     40
//   ),
// );
// console.log(
//   calculateEngravingPrice(
//     'Donec orci lectus aliquam est magnis', 
//     20,
//   ),
// );

// =====================================task-03========================================

// const findLongestWord = function(string) {
//   const array = string.split(' ');
//   console.log(array);
//   let a = '';
//   for (let i = 0; i < array.length; i += 1) {
//     if (a.length < array[i].length) {
//       a = array[i];
//     }
//   }
//   return a;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

// =====================================task-04========================================

// const formatString = function(string) {
//   if (string.length <= 40) {
//     return string;
//   } 
//   else {
//     return string.slice(0, 40) + '...';
//   }
// }


// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// // вернется форматированная строка

// =====================================task-05========================================

// const checkForSpam = function(message) {

//   if (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) {
//     return true;
//   }
//   else {
//     return false;
//   }
  
// }

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
// =====================================task-06========================================
// let input;
// const numbers = [];
// let total = 0;

// while (true) {
//   input = prompt('Enter the number');
//   let number = Number(input);
//   if (isNaN(number)) {
//     alert('Not a number entered, try again');
//     continue;
//   }
//   if (input === null) {
//     break;
//   }
//   numbers.push(number);
//   console.log(numbers);
// }
// if (numbers.length !== 0) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     total += numbers[i];
//   }
// }
// console.log(`The total amount of numbers is ${total}`);

// =====================================task-07========================================
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function(login) {
//   return login.length >= 4 && login.length <= 16 
// };

// const isLoginUnique = function(allLogins, login) {
//   return !allLogins.includes(login) 
// };

// const addLogin = function(allLogins, login) {     
//   if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
//     logins.push(login);
//     return "Логин успешно добавлен!";
//   } 
//   if (!isLoginValid(login)) {
//     return "Ошибка! Логин должен быть от 4 до 16 символов!";
//   } 
//   return "Такой логин уже используется";
// }

// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

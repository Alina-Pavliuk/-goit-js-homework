// =============================task-01==========================
// const name = 'Генератор защитного поля';
// let price = 1000;

// console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);

// price = 2000;
// console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);


// ===============================task-02============================
// const total = 100;
// const ordered = 50

// if (ordered <= total) {
//   console.log('"Заказ оформлен, с вами свяжется менеджер"');
// } else { console.log('"На складе недостаточно твоаров!"'); }


// ==================================task-03=============================
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// const password = prompt('Введите свой пароль');

// if (password === null) {
//   message = 'Отменено пользователем!';
// } else if (password === ADMIN_PASSWORD) {
//   message = 'Добро пожаловать!';
// } else  {
//   message = 'Доступ запрещен, неверный пароль!';
// }

// alert(message);

// ======================================task-04================================
// const credits = 23580;
// const pricePerDroid = 3000;

// const droidsAmount = prompt('Enter quantity droid');

// if (droidsAmount === null) {
//   console.log('Canceled by user');
// } else if (isNaN(droidsAmount) || droidsAmount <= 0 || droidsAmount % 1 !== 0) {
//   console.log('Wrong value');
// } else {
//   let totalPrice = droidsAmount * pricePerDroid;
//   if (totalPrice > credits) {
//     console.log('No enough money on your account')
//   } else {
//     const balance = credits - totalPrice;
//     console.log(`You bough ${droidsAmount} droid, your balance ${balance} credit.`);
//   }
// }

// ========================================task-05================================
// let country;
// let price;
// let selectedCountry;

// country = prompt('Выберите страну');

// if (country === null) {
//   console.log("Заказ отменен");
// } else {
//   selectedCountry = country.toLowerCase();

//   switch (selectedCountry) {
//     case "китай":
//       price = 100;
//       console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
//       break;
//     case "чили":
//       price = 250;
//       console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
//       break;
//     case "австралия":
//       price = 170;
//       console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
//       break;
//     case "индия":
//       price = 80;
//       console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
//       break;
//     case "ямайка":
//       price = 120;
//       console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
//       break;
//     default:
//       alert("В вашей стране доставка не доступна");
//   }
// }


// =====================================task-06===============================
// let input;
// let number;
// let total = 0;

// while (true) {
//   input = prompt('Введите число');
//   number = Number(input);

//   if (isNaN(number)) {
//     alert('Введите числовое значение');
//     continue;
//   } 
//   if (input === null) {
//     alert(`Общая сумма чисел равна ${total}`);
//     break;
//   }
//   total += number;
//   console.log(total); 
// }

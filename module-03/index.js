// ===================================task-01==============================================

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy'

// user.hobby = 'skydiving'

// user.premium = 'false'

// const keys = Object.keys(user); 
// for (const key of keys) {
//   console.log(user[key])
// }

// ===================================task-02==============================================

// const countProps = function(obj){
  
//   const keys = Object.keys(obj)
//   console.log(keys.length);
// }


// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
// ===================================task-03==============================================

// const findBestEmployee = function(employees) {
//   const a = { name: '', operation: 0 };

//   for (const employee in employees) {
//     if (a.operation < employees[employee]) {
//       a.name = employee;
//       a.operation = employees[employee];
//     }
//   }

//   return a.name;
// }

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// ===================================task-04==============================================
// const countTotalSalary = function(employees) {
  
//   const values = Object.values(employees);
//   console.log(values);
//   let sum = 0;
  
//   for (const value of values) {
//     sum += value;
//   }
  
//   console.log('Total: ', sum); 
//   return sum
// }



// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400
// ===================================task-05==============================================

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function(arr, prop) {
//  let result = [];
//  for (let product of arr) {
//   if (product[prop] !== undefined){
//    result.push(product[prop])
//   }
//    console.log(product[prop])
//  }
//  return result

// };

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// ===================================task-06==============================================
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function(allProducts, productName) {
   
//   let cost;
  
//   for (let product of allProducts) {
     
//     if (product.name === productName)
//      cost = product.price * product.quantity;
//   }
//   return cost
 
// }

// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800



 

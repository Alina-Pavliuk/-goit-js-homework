

// const Account = function(params) {
//   this.login = params.login;
//   this.email = params.email;
// } //or

// const Account = function({login, email}) {
//   this.login = login;
//   this.email = email;
// }

// Account.prototype.getInfo = function() {
//   console.log(`Login ${this.login}, email: ${this.email}`);
// }

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// console.log(Account.prototype.getInfo); // function
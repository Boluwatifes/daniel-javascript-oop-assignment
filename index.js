const stocks = require('./lib/javascript-oop-lib.js');
// Test for product adding
// instantiate a new Sales instance
let newSales = new stocks.Sales();

// create a new product
let milo = newSales.addProduct('Milo', 50, 200);

// create a new product
let egg = newSales.addProduct('Egg', 300, 100);

// add to the quantity of the product in the database
let addMilo = newSales.addProduct('Milo', 50, 200);

// prints out the products in the database
console.log('This are the products in the database', newSales.products);


//Test for sales

// make a new sale
let danielMilo = newSales.makeSale('Milo', 40, 'Daniel');
let danielEggs = newSales.makeSale('Egg', 100, 'Daniel');

// check how much the customer will pay
console.log('Your cart total is ', newSales.toPay);

// process the payment

let payment = newSales.checkout(19000);


// display the store balance

console.log('Store balance is ', newSales.storeBalance);

console.log("Welcome to the Seller Dashboard");


// =========================================================
// Variables & Data Types
// =========================================================

const productName = "Rice";

const unitPrice = 45;

const isAvailable = true;

const lastInvoice = null;

let supplierName;




// =========================================================
// Operators
// =========================================================

const quantity = 2;

console.log("Sale value for two units:", unitPrice * quantity);

console.log("Is the quantity equal to 2?", quantity === 2);


// =========================================================
// Conditions
// =========================================================

const stockQuantity = 8;

if (stockQuantity > 0) {
  console.log("Product is available");
} else {
  console.log("Product is out of stock");
}


// =========================================================
// Loops
// =========================================================

for (let i = 1; i <= 3; i++) {
  console.log("Number:", i);
}


// =========================================================
// Functions
// =========================================================

function calculateSaleTotal(price, units) {
  return price * units;
}

const total = calculateSaleTotal(45, 2);

console.log("Total from function:", total);


// =========================================================
// Application Data
// =========================================================

let riceStock = 8;
let milkStock = 3;
let juiceStock = 5;
let pastaStock = 2;

let salesTotal = 0;

let soldUnits = 0;

const ricePrice = 45;
const milkPrice = 35;
const juicePrice = 30;
const pastaPrice = 18;


// =========================================================
// Add Sale
// =========================================================

function addSale(price) {

  salesTotal = salesTotal + price;
  // salesTotal += price;

  soldUnits = soldUnits + 1;

  document.getElementById("salesTotal").textContent =
    salesTotal;

  document.getElementById("salesCounter").textContent =
    soldUnits;

  document.getElementById("saleMessage").textContent =
    "Sale completed. " + price + " EGP has been added to the total.";
}


// =========================================================
// Update Stock
// =========================================================

function updateStock(stockId, buttonId, quantity) {

  document.getElementById(stockId).textContent =
    quantity;

  if (quantity === 0) {

    document.getElementById(buttonId).disabled = true;

    document.getElementById(buttonId).textContent =
      "Out of stock — Quantity 0";
  }
}


// =========================================================
// Sell Rice
// =========================================================

function sellRice() {

  if (riceStock === 0) {

    return;
  }

  riceStock = riceStock - 1;

  addSale(ricePrice);

  updateStock(
    "riceStock",
    "riceButton",
    riceStock
  );
}


// =========================================================
// Sell Milk
// =========================================================

function sellMilk() {

  if (milkStock === 0) {

    document.getElementById("saleMessage").textContent =
      "Product is out of stock; cannot sell.";

    return;
  }

  milkStock = milkStock - 1;

  addSale(milkPrice);

  updateStock(
    "milkStock",
    "milkButton",
    milkStock
  );
}


// =========================================================
// Sell Juice
// =========================================================

function sellJuice() {

  if (juiceStock === 0) {

    document.getElementById("saleMessage").textContent =
      "Product is out of stock; cannot sell.";

    return;
  }

  juiceStock = juiceStock - 1;

  addSale(juicePrice);

  updateStock(
    "juiceStock",
    "juiceButton",
    juiceStock
  );
}


// =========================================================
// Sell Pasta
// =========================================================

function sellPasta() {

  if (pastaStock === 0) {

    document.getElementById("saleMessage").textContent =
      "Product is out of stock; cannot sell.";

    return;
  }

  pastaStock = pastaStock - 1;

  addSale(pastaPrice);

  updateStock(
    "pastaStock",
    "pastaButton",
    pastaStock
  );
}

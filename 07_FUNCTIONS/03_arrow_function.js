const calculateTotal = (price, quantity) => {
    return price * quantity;
}

let price = 10;
let quantity = 5;
let totalCost = calculateTotal(price, quantity);
console.log(totalCost); // Output: 50
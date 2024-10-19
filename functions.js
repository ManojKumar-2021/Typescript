//parameter and return type
function add(a, b) {
    return a + b;
}
//optional or default parameter
function sum(a, b) {
    if (b === void 0) { b = 0; }
    return a + b;
}
//function type
var myAdd = function (a, b) {
    return a + b;
};
//rest parameter
function mysum(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
}
//callback function
function processString(str, callback) {
    return callback(str);
}
// ASSIGNMENT:: WRITE A FUNCTION THAT TAKES AN ARRAY OF NUMBERS AND RETURNS THE SUM
function doSum(num) {
    var sum = 0;
    for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
        var val = num_1[_i];
        sum += val;
    }
    return sum;
}
/*
ASSIGNMENT:: WRITE A FUNCTION THAT ACCEPTS AN OPTIONAL SECOND PARAMETER FOR A DISCOUNT, DEFAULTING
TO 0 AND RETURN THE FINAL PRICE AFTER THE DISCOUNT
*/
function amount(productPrices, discount) {
    if (discount === void 0) { discount = 0; }
    var totalAmount = 0;
    for (var _i = 0, productPrices_1 = productPrices; _i < productPrices_1.length; _i++) {
        var price = productPrices_1[_i];
        totalAmount += price;
    }
    var disAmount = (discount / 100) * totalAmount;
    return totalAmount - disAmount;
}
console.log(amount([10, 30, 30, 40], 10));

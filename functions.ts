//parameter and return type

function add(a:number,b:number):number{
    return a+b
}

//optional or default parameter
function sum(a:number,b:number=0):number{
    return a+b
}

//function type
let myAdd :(a:number,b:number)=>number = function(a,b){
    return a+b;
}

//rest parameter
function mysum(a:number,...b:number[]):void{

}

//callback function
function processString(str:string,callback:(a:string)=>string):string{
    return callback(str);
}


// ASSIGNMENT:: WRITE A FUNCTION THAT TAKES AN ARRAY OF NUMBERS AND RETURNS THE SUM
function doSum(num:number[]):number{
    let sum:number = 0;
    for(let val of num) sum += val;
    return sum;
}

/*
ASSIGNMENT:: WRITE A FUNCTION THAT ACCEPTS AN OPTIONAL SECOND PARAMETER FOR A DISCOUNT, DEFAULTING 
TO 0 AND RETURN THE FINAL PRICE AFTER THE DISCOUNT
*/
function amount(productPrices:number[],discount:number = 0):number{
    let totalAmount:number = 0;
    for(let price of productPrices) totalAmount += price;
    let disAmount:number = (discount/100)*totalAmount;
    return totalAmount-disAmount;
}

console.log(amount([10,30,30,40],10));
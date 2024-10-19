//defining interface
interface User{
    name:string,
    contactNo:number[],
    pincode:number,
    hasAadhar:boolean
}
let Aman:User = {name:"Aman",contactNo:[9774829382,9413848584],pincode:248001,hasAadhar:true}


//optional properties
interface Student{
    name:string,
    drivingLicence?:string,
    course:string
}
let Ram : Student ={name:"Ram",course:"MCA"}


//readonly property
interface Point{
    x:number,
    y:number
}
let dot:Point={x:10,y:40}


//extending interface
interface Driver extends User{
    drivingLicence:boolean
}
let Mohan:Driver ={name:"Mohan",contactNo:[9456372846],pincode:248004,hasAadhar:true,drivingLicence:true}


//interface for function

interface AddFunction {
    (num1: number, num2: number): number
}

let customeAdd :AddFunction = function(num1,num2){
    return num1 + num2;
}


/*
ASSIGNMENT:: CREATE AN INTERFACE FOR A BOOK WITH PROPERTIES LIKE TITTLE, AUTHOR AND YEARPUBLISH.
IMPLEMENT THE INTERFACE WITH A BOOK OBJECT
*/
interface Book{
    tittle:string,
    author:string,
    yearPublish:Date
}
let OperatingSystem :Book = {
    tittle:"Operating system Design and Implementation",
    author:"tanenbaum",
    yearPublish:new Date("2002/02/02")
}


/*
ASSIGNMENT:: CREATE AN INTERFACE FOR A PERSON, THE EXTEND IT WITH EMPLOYEE TO INCLDE PROPERTIES LIKE 
EPMLOYEEID AND POSITION
*/
interface Person{
    name:string,
    age:number
}

interface Employee extends Person{
    employeeId:number,
    position:string
}

let rohan:Employee = {name:"Rohan",age:24,employeeId:43,position:"Architect"}

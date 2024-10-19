// Defining a class
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printName(): void {
        console.log(this.name);
    }
}

//creating object
let dog = new Animal("Dog");
dog.printName();


/*
Access Modifiers
    1:public
    2:private
    3:protected
*/
class Person {
    public readonly name: string;
    private PAN: number;

    constructor(name: string, PAN: number) {
        this.name = name;
        this.PAN = PAN;
    }

    public getPAN() {
        return this.PAN
    }
}

let Amar: Person = new Person("Amar", 12345);
console.log(Amar.getPAN())

//inheritance

class Bird extends Animal {

    constructor(name: string) {
        super(name);
    }

    fly() {
        console.log(`${this.name} is able to fly`);
    }
}

const eagle = new Bird("Eagle");
console.log(eagle.fly())


//abstract class
abstract class Shape {
    abstract getArea(): number;
}

class Circle extends Shape {
    r: number;
    constructor(r: number) {
        super();
        this.r = r;
    }
    getArea(): number {
        return 3.14 * this.r * this.r;
    }

}

const circle = new Circle(3);
const area: number = circle.getArea();
console.log(area);


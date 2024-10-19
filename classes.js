var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Defining a class
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.printName = function () {
        console.log(this.name);
    };
    return Animal;
}());
//creating object
var dog = new Animal("Dog");
dog.printName();
/*
Access Modifiers
    1:public
    2:private
    3:protected
*/
var Person = /** @class */ (function () {
    function Person(name, PAN) {
        this.name = name;
        this.PAN = PAN;
    }
    Person.prototype.getPAN = function () {
        return this.PAN;
    };
    return Person;
}());
var Amar = new Person("Amar", 12345);
console.log(Amar.getPAN());
//inheritance
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name) {
        return _super.call(this, name) || this;
    }
    Bird.prototype.fly = function () {
        console.log("".concat(this.name, " is able to fly"));
    };
    return Bird;
}(Animal));
var eagle = new Bird("Eagle");
console.log(eagle.fly());
//abstract class
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(r) {
        var _this = _super.call(this) || this;
        _this.r = r;
        return _this;
    }
    Circle.prototype.getArea = function () {
        this.area = 3.14 * this.r * this.r;
        return this.area;
    };
    return Circle;
}(Shape));
var circle = new Circle(3);
var area = circle.getArea();
console.log(area);

// Task
// Write a program that has:
// - 3 classes (person, car, animal)
// - 6 objects, 2 objects instance for each class (2 objects from the person, 2 from the car, 2 from the animal)
// the person class has a subclass inherits it and the subclass has an object.
// each class has attributes and functions
// each object is an instance of its class
// - a function to print object all attributes and use it on 3 different objects from different classes
// - a constructor to add attributes to the objects
// P.S: All functions SHOULD be in the typical form (commented) and arrow function form (used and active)
// You should apply the OOP 4 principles in your code (Encapsulation, Abstraction, Inheritance, Polymorphism).
// Have fun coding, keep your fingers busy :wink:

class Person {
    #age;
    #gender;
    constructor(age, gender) {
        this.#age = age;
        this.#gender = gender;
    }
    setAge(age) {
        this.#age = age;
    }
    getAge = () => this.#age;
    printData() { console.log(`age =${this.#age}, gender =${this.#gender}`); }

}
amal = new Person(14, "F");
duaa = new Person(55, "M");
amal.printData();
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class Teacher extends Person {
    #major;
    constructor(age, gender, major) {
        super(age, gender);
        this.#major = major;
    }
    setAge(major) {
        this.#major = major;
    }
    getAge = () => this.#major;
    printData() {
        super.printData();
        console.log(`,major =${this.#major}`);
    }
}


var ahmad = new Teacher(30, "M", "Mathematics");
ahmad.printData();
// ------------------------------------

class Car {
    #model;
    #topSpeed;
    #position;
    constructor(model, topSpeed) {
        this.#model = model;
        this.#topSpeed = topSpeed;
        this.#position = new Number();
    }
    setAge(topSpeed) {
        this.#topSpeed = topSpeed;
    }
    getAge = () => this.#topSpeed;

    //There is no real function overloading in JavaScript
    // gas(){
    //  this.#position+=1;
    //  console.log(`the car is in position:${this.#position} now.`)
    // }
    gas(push) {
        this.#position += push;
        console.log(`the car is in position:${this.#position} now.`)
    }
}
const myCar = new Car("X6", 200);
const ahmadsCar = new Car("H100", 160);
myCar.gas(1);
myCar.gas(5);

// ------------------------------------
class Animal {
    #age;
    #gender;
    constructor(age, gender) {
        this.#age = age;
        this.#gender = gender;

    }
    setAge(age) {
        this.#age = age;
    }
    getAge = () => this.#age;

    display() {
        console.log('a = ' + this.a);
        console.log('b = ' + this.b);
    }
}
const cat3bsy = new Animal(2, "M");
const catSaqer = new Animal(1, "M");

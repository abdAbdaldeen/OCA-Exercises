// Task:
// 1) create 3 classes as follow:
// - class name Person
// - class name Car
// - class name Animal
// - Class Person has 3 attributes inside (id, name, age) and has function named "Greeting" which will pring a greeting message
// - Class Car has 3 attributes inside (id, type, year) and has function named "start" which will print a message that the car is running
// - Class Animal has 3 attributes inside (id, name, isPet (boolean)) and has function named homeAnimal which will return animal objects where its boolean isPet value is true.
// 2) create 2 objects for each class:
// - from class Person create 2 objects (name them as you please)
// - from class Car create 2 objects (name them as you please)
// - from class Animal create 2 objects (name them as you please)
// 3) create a class called "Teacher" that inherits the Person class then:
// - create an object called "Sobhi" from the class Teacher, and use inside it the function Greeting.
// 4) write an arrow function to print any object you pass it in the function braces ()
// 5) write a constructor to add attributes to the objects (ex: for the person class to add the id, name, and age using the constructor)
// 6) write an example for the following:
// - encapsulation
// - abstraction
// - inheritence
// - polymorphism


//*********1*************

class Person {
    #id;
    #name;
    #age;
    constructor (id,name,age){
        this.#id=id;
        this.#name=name;
        this.#age=age;
    }
Greeting() {
    console.log("Hi!");
}

getData(){return `id = ${this.#id}, name= ${this.#name}, age= ${this.#age}`}

}
var ashraf = new Person(1,"ashraf",45);
var bdour = new Person(2,"bdour",38);

class Teacher extends Person{
    #major="CS";
    constructor (id,name,age){
        super(id,name,age);
    }
        getData=()=>super.getData() + `,major = ${this.#major}`;
}
var sobhi = new Teacher(1,"sobhi",35);
sobhi.Greeting();

console.log(sobhi.getData());
class Car{
    #id;
    #type;
    #year;
    constructor(id,type,year){
        this.#id=id;
        this.#type=type;
        this.#year=year;
    }
    start(){
        console.log("the car is running"+this.#calc(5,10));
    }
    #calc(x,y){
        return x+y;
    }
}

var bmw = new Car(2,"car",2000);
var h100 = new Car(2,"bus",2060);
h100.start();

class Animal {
    #id;
    #name;
    #isPet=new Boolean();
    constructor (id,name,isPet){
        this.#id=id;
        this.#name=name;
        this.#isPet=isPet;
    }
    homeAnimal(){
        if(this.#isPet){
            return this;
        }
    }
}
var cat = new Animal(1,"sqar",false);
var dog = new Animal(2,"dogy",true);

printObj =(obj)=>console.log(obj);
printObj(dog);
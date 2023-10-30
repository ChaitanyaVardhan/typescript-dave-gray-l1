"use strict";
// var userName = "Chaitanya";
// console.log(userName);
class A {
    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
}
console.log(new A('Chaitanya Vardhan', 43, 6.74));
//l7 shorter definition of class with DRY features using visibility modifiers
class B {
    constructor(name, age, computer, lang) {
        this.name = name;
        this.age = age;
        this.computer = computer;
        this.lang = lang;
    }
    getAge() {
        return `Hello, my age is ${this.age}`;
    }
}
const b1 = new B('Chaitanya Vardhan', 41, 'macbook air', 'TypeScript');
console.log(b1.name);
console.log(b1.computer);
console.log(b1.getAge());
// Errors:
// Property 'secondLang' has no initializer and is not definitely assigned in the constructor
// Property 'lang' is protected and only accessible within class 'B' and its subclasses.
// Property 'lang' is protected and only accessible within class 'B' and its subclasses.
// Property 'age' is private and only accessible within class 'B'
//////////////////////////////////////////
//l7
//extend the class B, check the visibility type of properties of class B
class C extends B {
    constructor(height, name, age, computer, lang) {
        super(name, age, computer, lang);
        this.height = height;
        this.height = height;
    }
}
const c1 = new C('5.6', 'Chaitanya Vardhan', 100, 'macbook air', 'TypeScript');
c1.height;
console.log(c1);
// A 'super' call must be the first statement in the constructor to refer to 'super' or 'this' when a derived class contains initialized properties, parameter properties, or private 

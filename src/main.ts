// var userName = "Chaitanya";
// console.log(userName);

// let a: number = 12;
// let b: number = 6
// let c = 2
// console.log(a, b, c)
// console.log(a + c)
// console.log(a / b)
// console.log(b * c)
// lesson2
/////////////////////////////////////////////////
//lesson7
// l7 defining a class
interface Student {
    name: string,
    age: number,
    gpa: number,
}

class A implements Student {
    name: string;
    age: number;
    gpa: number;

    constructor(name: string, age: number, gpa: number){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
}

console.log(new A('Chaitanya Vardhan', 43, 6.74))

//l7 shorter definition of class with DRY features using visibility modifiers

class B {
    secondLang!: string
    constructor(public readonly name: string, private age: number, public computer: string, protected lang: string) {}
    getAge() {
        return `Hello, my age is ${this.age}`
    }
}
const b1 = new B('Chaitanya Vardhan', 41, 'macbook air', 'TypeScript');
console.log(b1.name);
console.log(b1.computer);
console.log(b1.getAge())

// Errors:
// Property 'secondLang' has no initializer and is not definitely assigned in the constructor
// Property 'lang' is protected and only accessible within class 'B' and its subclasses.
// Property 'lang' is protected and only accessible within class 'B' and its subclasses.
// Property 'age' is private and only accessible within class 'B'
//////////////////////////////////////////
//l7
//extend the class B, check the visibility type of properties of class B

class C extends B {
    constructor(public height: string, name: string, age: number, computer: string, lang: string) {
        super(name, age, computer, lang)
        this.height = height
    }
}

const c1 = new C('5.6','Chaitanya Vardhan', 100, 'macbook air', 'TypeScript')
c1.height
console.log(c1)
// A 'super' call must be the first statement in the constructor to refer to 'super' or 'this' when a derived class contains initialized properties, parameter properties, or private 
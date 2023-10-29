var userName = "Chaitanya";
console.log(userName);

let a: number = 12;
let b: number = 6
let c = 2
console.log(a, b, c)
console.log(a + c)
console.log(a / b)
console.log(b * c)
// lesson2
//lesson7
// defining a class
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
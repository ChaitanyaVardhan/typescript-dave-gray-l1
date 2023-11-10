console.log("Index Signatures")

// interface CarObj {
//     brand: string,
//     model: string,
//     price: number,
// }

interface CarObj {
    [key: string]: string | number | boolean
}
const car: CarObj = {
    brand: 'some brand',
    model: 'some model',
    price: 0.00
}

// Type '{ name: string; }' is not assignable to type 'CarObj'.

//   Object literal may only specify known properties, and 'name' does not exist in type 'CarObj'.

// Type '{ brand: string; }' is missing the following properties from type 'CarObj': model, pricets(2739)

const car1: CarObj = {
    brand: 'BMW',
    model: '2 series',
    price: 5000000
}
// Type '{}' is missing the following properties from type 'CarObj': brand, model, price

// Type 'string' is not assignable to type 'number'.

console.log(car1.brand);
console.log(car1['brand'])

const prop: string = 'model'

console.log(car1[prop])

// Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'CarObj'.
//  No index signature with a parameter of type 'string' was found on type 'CarObj'.ts(7053)

const printProps = (car: CarObj): void => {
    for (const key in car) {
        console.log(car[key])
    }
}
// A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.ts(2355)
// Parameter 'car1' implicitly has an 'any' type.ts(7006)

console.log(printProps(car))
console.log(printProps(car1))
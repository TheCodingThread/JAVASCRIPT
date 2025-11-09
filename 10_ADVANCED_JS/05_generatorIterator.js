function* numGenerator(){ //Generator function is defined by adding a '*' in front of the 'function'
    yield 1 //the '*' including 'yield' is known as Generator
    yield 2
    yield 3
}

let firstGen = numGenerator()
let secGen = numGenerator()

console.log(firstGen.next().value) //1
console.log(firstGen.next().value) //2
console.log(firstGen.next().value) //3

console.log(secGen.next().value) //1
console.log(secGen.next().value) //2
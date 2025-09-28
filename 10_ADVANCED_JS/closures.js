function outer(){
    counter = 3;
    return function (){
        counter++;
        return counter;
    }
}

let increment = outer()
console.log(increment())
console.log(increment())
console.log(increment())

// Closure is a function having access to the parent scope, even after the parent function has closed.
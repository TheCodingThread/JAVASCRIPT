let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for(const i of numbers){ // Using for-of loop to iterate over elements of an object. Here 'i' represents each element in the 'numbers' array.
    if(i === 4){
        break
    }
    smallNumbers.push(i);
}

console.log(smallNumbers); // Output: [1, 2, 3]
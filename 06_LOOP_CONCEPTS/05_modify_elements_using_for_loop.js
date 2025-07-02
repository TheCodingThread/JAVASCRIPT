let numbers = [2, 4, 6]
let multipliedNumbers = []

for(let i = 0; i<numbers.length; i++){
    multipliedNumbers[i] = numbers[i] * 2
}

console.log(multipliedNumbers.join(", ")) // Output: 4, 8, 12
// This code multiplies each element of an array by 2 and stores the result in another array.
console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true
// This is due to the fact that the equality operator == and comparisons work differently
// Comparisons convert null to a number, treating it as 0, that is why the the third line of code returns true
// That is why most of the time we avoid these type of comparisons
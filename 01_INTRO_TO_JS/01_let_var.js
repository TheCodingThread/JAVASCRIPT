let idName = "TheCodingThread"
var idCountry = "India"

console.log(idName)
console.log(idCountry)

// Instead of printing 'console.log' multiple times we can use 'console.table' to print 
// the variables in a table format
console.table([idName, idCountry])

//what if you don't provide 'let' or 'var' to the variable
idWebsite = "https://thecodingthread.com"
console.log(idWebsite) //JavaScript will still allow it but it is not considered a good practice

//It is recommended to use 'let' instead of 'var'
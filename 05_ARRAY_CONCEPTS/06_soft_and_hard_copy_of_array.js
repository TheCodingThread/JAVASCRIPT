let topCities = ["Berlin", "Singapore", "New York"];

//Soft copy

let softCopyCities = topCities; // If you modify topCities, softCopyCities will also change
console.log(softCopyCities); // Output: ["Berlin", "Singapore", "New York"]

//Hard copy

//Method 1
let hardCopyCities = topCities.slice(); // Rarely used
console.log(hardCopyCities); // Output: ["Berlin", "Singapore", "New York"]
//Method 2
let hardCopyCities2 = [...topCities]; // Commonly used
console.log(hardCopyCities2); // Output: ["Berlin", "Singapore", "New York"]
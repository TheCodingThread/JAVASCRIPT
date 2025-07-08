function makeTea(typeOfTea){ //pass parameter
    return "Making" + " " + typeOfTea;
}

let teaOrder = makeTea("green tea"); //pass argument; To store the result of a function to a variable the function should return something
console.log(teaOrder); // Output: "Making green tea"
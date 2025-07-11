function makeTea(tea){
    return tea + " is ready!";
}

function processTeaOrder(teaFunction){
    return teaFunction("earl grey"); //returning a function
}

let teatype = processTeaOrder(makeTea); //passing a function as an argument
console.log(teatype); // Output: earl grey is ready!
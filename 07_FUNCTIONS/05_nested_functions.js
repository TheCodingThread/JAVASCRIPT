function createTeaMaker(){
    return function(teaType){ //returns a function
        return "Making " + teaType;
    };
}

let tea = createTeaMaker(); // tea is now a function
console.log(tea("green tea")); // Output: Making green tea
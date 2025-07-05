let teas = ["earl grey", "green tea", "chai", "oolong tea"]
let availableTeas = []

teas.forEach(i => {
    if(i === "chai") {
        return; // Skip the iteration if the tea is "chai"
        //we did not use break here because we are currently under a function
    }
    availableTeas.push(i);
});

console.log(availableTeas); // Output: [ 'earl grey', 'green tea', 'oolong tea' ]
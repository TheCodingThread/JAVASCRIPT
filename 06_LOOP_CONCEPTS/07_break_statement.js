let teas = ["green tea", "black tea", "chai", "oolong tea"]
let selectedTeas = []

for(let i=0; i<teas.length; i++){
    if(teas[i] === "chai"){
        break // Stop the loop when "chai" is found
    }
    selectedTeas.push(teas[i])
}

console.log(selectedTeas) // Output: [ 'green tea', 'black tea' ]
let cities = ["London", "New York", "Paris", "Berlin"]
let visitedCities = []

for(let i=0; i<cities.length; i++){
    if(cities[i] === "Paris"){
        continue // Skip the iteration when "Paris" is found
    }
    visitedCities.push(cities[i])
}

console.log(visitedCities) // Output: [ 'London', 'New York', 'Berlin' ]
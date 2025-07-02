let cities = ["Paris", "New York", "Tokyo", "London"]
let cityList = []

for(let i=0; i<cities.length; i++){
    cityList.push(cities[i])
}

console.log(cityList.join(", ")) // Output: Paris, New York, Tokyo, London
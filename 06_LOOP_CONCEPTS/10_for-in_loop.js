let citiesPopulation = {
    "london": 8908081,
    "new york": 8419600,
    "paris": 2140526,
    "berlin": 3644826
}

let cityPopulation = {}

for(const city in citiesPopulation) {
    if(city == "berlin"){
        break; // Exit the loop if the city is "berlin"
    }
    cityPopulation[city] = citiesPopulation[city];
}

console.log(cityPopulation); // Output: { london: 8908081, 'new york': 8419600, paris: 2140526 }
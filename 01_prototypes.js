let storage = {
    ram: 16,
    ssd: 512
}

let screenAndStorage = {
    screen: 15.6,
    refreshRate: 144,
    __proto__: storage // lenovo inherits properties from asus. Older way of setting prototype
}

console.log(screenAndStorage.__proto__); // { ram: 16, ssd: 512 }

//explicitly setting prototype
let car = {
    tyres: 4,
    seatbeltIncluded: true
}

let teslaCar = {
    driver: "AI"
}

Object.setPrototypeOf(teslaCar, car); // teslaCar inherits properties from car

//2 ways to check prototype
console.log(teslaCar.__proto__); // { tyres: 4, seatbeltIncluded: true }
console.log(Object.getPrototypeOf(teslaCar));
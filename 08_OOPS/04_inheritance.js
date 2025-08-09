class Accessory{
    constructor(company, model){
        this.company = company;
        this.model = model;
    }

    details(){
        return `The accessory is ${this.model} from ${this.company}`;
    }
}

class Laptop extends Accessory { // Laptop class inherits from Accessory using 'extends' keyword
    details() {
        return `The laptop is ${this.company} ${this.model}`;
    }
}

let laptopItem = new Laptop("Asus", "Tuf A15");
console.log(laptopItem.details()); // The laptop is Asus Tuf A15
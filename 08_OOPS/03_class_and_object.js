class Accessory{ //name of class should start with capital letter
    constructor(company, model){ //to use constructor function inside a class, we use 'constructor'
        this.company = company;
        this.model = model;
    }

    details(){ //function inside a class is called method
        return `The accessory is ${this.model} from ${this.company}`;
    }
}

let item = new Accessory("Asus", "Tuf A15");
console.log(item.details()); // Output: The accessory is Tuf A15 from Asus
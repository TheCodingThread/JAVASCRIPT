//1
function Car(company, model){ // Name of the constructor function should start with a capital letter
    this.company = company; //this refers to the object being created
    this.model = model;
}

let car1 = new Car("Honda", "City"); // Creating an instance of Car
console.log(car1); // Car { company: 'Honda', model: 'Civic' }

//2
function Laptop(brand, model){
    this.brand = brand;
    this.model = model;
    this.details = function(){
        return "Laptop: " + this.brand + " " + this.model;
    }
}

console.log(new Laptop("Asus", "Tuf A15").details()); // Laptop: Asus Tuf A15

//constructor function with prototype
function Phone(brand, model){
    this.brand = brand;
    this.model = model;
}

Phone.prototype.getDetails = function() {
    return "Phone: " + this.brand + " " + this.model;
}

let phone1 = new Phone("Apple", "iPhone 16");
console.log(phone1.getDetails()); // Phone: Apple iPhone 16
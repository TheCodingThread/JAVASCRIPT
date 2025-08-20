class Bird{
    fly(){
        return "I can fly";
    }
}

class Ostrich extends Bird{
    fly(){
        return "I cannot fly";
    }
}

let bird1 = new Bird();
console.log(bird1.fly()); // Output: I can fly
let bird2 = new Ostrich();
console.log(bird2.fly()); // Output: I cannot fly
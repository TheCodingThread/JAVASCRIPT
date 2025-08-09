class bankAcc{
    #balance = 0; //this balance is private and cannot be accessed outside this class. Hence, this data gets protected.

    deposit(amount){
        this.#balance += amount;
        return `New balance is $${this.#balance}`;
    }

    getBalance(){
        return `Your balance is $${this.#balance}`;
    }
}

let acc1 = new bankAcc();
console.log(acc1.deposit(1000)); // New balance is $1000
console.log(acc1.getBalance()); // Your balance is $1000
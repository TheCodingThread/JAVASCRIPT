class Add{
    static add(a, b){
        return a + b;
    }
}

//if we use static method, we can call it without creating an object
console.log(Add.add(5, 7)); // Output: 12
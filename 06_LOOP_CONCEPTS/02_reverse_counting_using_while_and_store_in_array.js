let countdown = [];
let num = 5;
while(num>=1){
    countdown.push(num);
    num--;
}
console.log(countdown.join(", ")); //It joins the array elements with a comma and space
// Output: 5, 4, 3, 2, 1
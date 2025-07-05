let nums = [2, 5, 7, 9]
let doubledNums = []

for(let i=0; i<nums.length; i++){
    if(nums[i] === 7) {
        continue;
    }
    doubledNums.push(nums[i] * 2);
}

console.log(doubledNums); // Output: [ 4, 10, 18 ]
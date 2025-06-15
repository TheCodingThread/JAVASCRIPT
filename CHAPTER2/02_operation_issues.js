console.log("2" + 1) //21
console.log(2 + "1") //21
console.log("2" + 1 + 3) //213
console.log(2 + 1 + "3") //33

//The + operator is used for both addition and concatenation. If any one of the operand is a string, then the + operator will perform concatenation

// But in the case of more than 2 operands, if the first operand is a string, then the + operator will perform concatenation for all the operands. If the first operand is a number, then the + operator will perform addition for all the operands
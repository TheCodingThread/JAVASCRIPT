function orderTea(teaType){
    function confirmOrder(){
        return "Order confirmed for chai";
    }
    return confirmOrder();
}

let tea = orderTea("chai");
console.log(tea); // Output: Order confirmed for chai
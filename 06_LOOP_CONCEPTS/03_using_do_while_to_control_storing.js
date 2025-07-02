let teaCollection = []
let tea

do{
    tea = prompt("Enter a tea name: ") //prompt is a browser feature and nodejs doesn't support it directly
    if(tea !== "stop"){
        teaCollection.push(tea);
    }
}while(tea !== "stop");
console.log(teaCollection.join(", "));
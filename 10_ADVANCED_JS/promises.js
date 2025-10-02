function fetchData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let success = true
            if(success) resolve("Data is fetched successfully!")
            else reject("Error in fetching data!")
        }, 3000);
    }
    )
}

fetchData()
.then((data)=>{
    console.log(data)
    return `sebin`
})
.then((name)=>console.log(name)) //chaining of then
.catch((error)=>console.log(error))

//then is for accessing resolve while catch is for accessing reject
//then chaining can also be done
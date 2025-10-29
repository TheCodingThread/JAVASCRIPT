function fetchUserData(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve({"name": "TheCodingThread", "url": "https://thecodingthread.com"})
        }, 3000);
    })
}

async function getUserData() {
    try{
        console.log("Fetching User Data...")
        let fetchData = await fetchUserData(); //await is always to be used with the async function only
        console.log(fetchData)
        console.log("User Data Fetched successfully")
    }catch(error){
        console.log("Error in fetching data!!")
    }
}

getUserData()

//if there are multiple promises then, we can call it using Promise.all
//const [variable1, variable2] = await Promise.all([function1(), function2()])
//and finally print those variables
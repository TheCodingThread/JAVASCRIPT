const Info = {
    name: "TheCodingThread",
    greet(){
        console.log("Hello, I am ", this.name)
    }
}

Info.greet()

let InfoTransfer = Info.greet
InfoTransfer()

let boundedInfoTransfer = Info.greet.bind({"name": "TCO"})
boundedInfoTransfer()
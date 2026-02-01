function sayJaiShriRam () {
    // console.log("Jai Shri Ram")
}

sayJaiShriRam // reference
sayJaiShriRam() // Execution

function addTwoNumber (a,b){
    // console.log(a+b)
}

const result = addTwoNumber(5,null)
// console.log(result)

function withReturn (a,b) {
    // let result = a+b
    // console.log(result)
    return a+b
}

withReturn(10,99)

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Sudhamsha"));
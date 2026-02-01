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

// console.log(loginUserMessage("Sudhamsha"));

function calculateCartPrice(...num1){
    // When we need to past many operators we will make use of rest/spread operator
    return num1
}
// console.log(calculateCartPrice(200,400,600))

function anotherFunctions(val1, val2, ...num1){
    return num1
}
// console.log(anotherFunctions(200,400,500,5000))

const user = {
    username: "sudhamsha",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)
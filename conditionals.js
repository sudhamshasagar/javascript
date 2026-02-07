// if statement

const isUserLoggedIn = true
const temperature = 20

if(temperature < 20){
    // console.log("Slight Summer")
} else {
    // console.log("It's winter")
}

const score = 200
if(score>100){
    const power = "fly"
    // console.log(`The user power is ${power}`)
}
// console.log(`The user power is ${power}`)
// The above code won't work because of scope

const balance = 1000
if(balance > 500) console.log("true"); //Implicit scope

if(balance < 500 ){
    // console.log("less than")
}else if (balance < 700){
    // console.log("less")
}else{
    // console.log(`value is ${balance}`)
}

const month = "March"

switch (month) {
    case "jan":
        // console.log("January");
        break;
    case "Feb":
        // console.log("Febraury");
        break;
    case "March":
        // console.log("March");
        break;
    case "April":
        // console.log("April");
        //break
    default:
        // console.log("Nothing Matched");
        break;
}

// Falsy values
// false, 0, -0 , BigInt 0n, Empty String, null, undefined, NaN 

// truthy values
// "0",'false', " ", [], {}, function()

const userEmail = []

if(userEmail.length === 0){
    // console.log("Array is empty");
    
}

const emtpyObj = {}

if(Object.keys(emtpyObj).length ===0){
    // console.log("Object also empty");

}

// console.log(typeof [])

const array1 = ["Shri Ram"]
// console.log(typeof array1);


let val1
val1  = null ?? undefined
console.log(val1);
// Null coalescing operator returns the 2nd value when the first value is null or undefined


// condition ? true: false

const ticketPrice = 500
ticketPrice >= 400 ? console.log("Yes") : console.log("No")


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
    console.log("less than")
}else if (balance < 700){
    console.log("less")
}else{
    console.log(`value is ${balance}`)
}
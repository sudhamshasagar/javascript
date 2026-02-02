const user = {
    username: "sudhamsha",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
}
// user.username = "shri ram"
// user.welcomeMessage()
// This means current context
// console.log(this) //Referring to empty object

// function coffee(){
//     let username = "shri ram"
//     console.log(this.username)
// }

// coffee()

// Inside function, this won't work as it works in object

// Arrow Function

const coffee = ()=> {
    let username = "shriram"
    console.log(this.username)
}

// coffee() Result will be undefined as this won't work inside a function

const addTwo = (a,b) => {
    return a+b
}
// console.log(addTwo(5,7))

// Implicit return arrow functions

const addThree = (a,b) => a+b
// console.log(addThree(3,4))
const newOne = (a,b) => ({username: "shri ram"})
console.log(newOne(3,4))

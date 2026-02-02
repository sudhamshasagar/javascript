// Type to declare a variable

// {} It is called a scope

let a = 100

if(true) {
    a 
    const b=20
    var c= 10
    console.log(a)
}

// console.log(a)
// console.log(b)
// console.log(c)

// {} what ever inside this curly braces is called block scope and outside of that is global scope

function one(){
    const username = "sudhamsha"
    // const site ='youtube'
    function two() {
        const site = "instagram"
        // console.log(username)
        // console.log(site)
    }
    // console.log(site)
    two()
}
one()


addOne() // This is allowed
function addOne(num){
    return num+1
}


addTwo() // This is not allowed, this is called hoisting
const addTwo = function(num){
    return num+2

}

addTwo(5)
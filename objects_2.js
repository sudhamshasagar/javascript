// Two types of objects , singleton objects and object literals

const tinderUser = new Object() // Singleton object
// console.log(tinderUser)
const anotherTinder = {}
// console.log(anotherTinder)

anotherTinder.id = 156
anotherTinder.name = "Samarth"
// console.log(anotherTinder)
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: "Murthy Samarth S Kalasi",
        firstname: "Murthy Samarth",
        middlename: "S",
        lastname: "Kalasi"
    }
}
// console.log(regularUser.fullName?.firstname)

const obj1 = {1: "s", 2: "r"}
const obj2 = {4: "i", 5: "o"}

const obj3 = {obj1,obj2}
const obj4 = Object.assign(obj1, obj2)
const obj5 = {...obj1, ...obj2}

// console.log(obj3)
// console.log(obj4)
// console.log(obj5)
console.log(Object.keys(anotherTinder))
console.log(Object.values(anotherTinder))
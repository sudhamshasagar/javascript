// singleton
// object literals

const mysym = Symbol("key1")
const user = {
    id: 101,
    "full name" : "Sudhamsha Sagar",
    name: "Sudhamsha",
    city: "Sagara",
    age: 25,
    email: "sudhamshasagar@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Friday"],
    [mysym]: "Sudhamsha@0906"
}

let myArray = ["S", "I"]
// To acccess the element in array then we have to make use of indexing
// console.log(myArray[0])

// To access the key value pairs in objects:
// console.log(user.city)
// console.log(user["name"])
// console.log(user["full name"])
console.log(user)
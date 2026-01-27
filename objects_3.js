const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: "Murthy Samarth S Kalasi",
        firstname: "Murthy Samarth",
        middlename: "S",
        lastname: "Kalasi"
    }
}

// Destructuring the object
const {email, fullName:{middlename: mid}} = regularUser
// console.log(email, mid)


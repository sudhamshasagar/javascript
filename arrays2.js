const ramayan_heros = ["Shri Ram", "Hanuman", "Lakshman", "Vibheeshan"]
const mahabharath_heros = ["Arjun", 'Krishna', "Karna"]

// ramayan_heros.push(mahabharath_heros)
// console.log(ramayan_heros)
// console.log(ramayan_heros.length)
newArray = ramayan_heros.concat(mahabharath_heros)
// console.log(newArray)

// Spread operator ...
const allNewHeros = [...mahabharath_heros, ...ramayan_heros]
// console.log(allNewHeros)
const anotherArray = [1,2,3,[4,5,6], 7,[6,7,[4,5]]]
const realAnotherArray = [...anotherArray]
const usableArray = anotherArray.flat(Infinity)

// console.log(realAnotherArray)
// console.log(usableArray)
console.log(Array.isArray("Shri Ram"))
console.log(Array.from("Shri Ram"))

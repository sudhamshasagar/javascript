//  at() => Returns the character on mentioned index, accepts -ve values, out of range returns undefined, this method also works on arrays.

const statement = 'Shri Ram defeated Ravan'
// console.log(statement.at(5))

// charAt() => Same as at() but it doesn't accept negative numbering, if -ve is entered then it will be treated as 0

// console.log(statement.charAt(-5)) (// = > Nothing will be returned  )
console.log(statement.charAt(2))
console.log(statement.charCodeAt(4))

const statement2 = "And Kumbhakarna was defeated by Lakshman"

// Concat => Joins two strings

console.log(statement.concat(" ",statement2))

// endsWith() => Checks the string ends with that charcter or word also it's case sensitive

console.log(statement2.endsWith('n'))
console.log(statement2.endsWith('Lakshman'))
console.log(statement2.endsWith('lakshman'))

// includes() => checks the string includes the mentioned word or letter

console.log(statement2.includes('L'))
console.log(statement2.includes('Lakshman'))

// indexOf => Returns the index number of given word or letter

console.log("shri ram".length)  // => length()
console.log("shri ram".slice(0,4)) // => slice()

console.log("ram".repeat(" ", 3))
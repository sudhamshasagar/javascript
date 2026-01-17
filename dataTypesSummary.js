// Main Data Types

// - Primitive Data Type

/* 
-- Number
-- String
-- Boolean
-- undefined
-- null 
-- BigInt
-- Symbol (Used to make values unique) 
*/

// - Non Primitive Data Type (Reference)

/*
-- Array
-- Objects
-- Functions
*/

// console.log(typeof 100.05)
// console.log(typeof null)

const id = Symbol('123')
const anotherId =  Symbol('123')

// console.log(id === anotherId)
// console.log(id == anotherId)

const bigNumber = 1n
// console.log(typeof bigNumber)

const role = ['Shri Ram', 'Hanuman', 'Sita', 'Lakshman', 'Shatrughna']
let myObj = {name: "Shri Ram", age: 25}

// console.table(typeof [role, myObj])

//  ==> Data type of Array is object
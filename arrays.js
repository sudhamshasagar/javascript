const myArr = [0,1,2,3,4,5,6]
// 0,1,2,3,4,5,6 are the elements
// Mix data types in a single array is allowed
// console.log(myArr[0])
// Indexing starts from 0
// Array always created shallow copy(Same reference)
const myHeros = ["Shri Ram", "Lakshman", "Hanuman", "Bharath"]
const arr2 = new Array(5,4,6,7)
// console.log(myHeros)
// console.log(arr2)


// Methods on Arrays

myArr.push(100,0)   // Adds a number in the last
// console.log(myArr)
myArr.pop()        // Removes the last element
// console.log(myArr)
myArr.unshift(121) // Adds the element at the first
// console.log(myArr)
myArr.shift()      // Removes the first element
// console.log(myArr)
// console.log(myArr.includes(9))  // Checks the existence
// console.log(myArr.indexOf(1022))  // Returns the index of a elements

const newArr = myArr.join()
// console.log(newArr)
//  slice just do the copy paste where original array will not be affected where splice does cut copy and paste
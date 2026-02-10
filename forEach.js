const characters = ["Ram","Sita","Hanuman","Lakshman","Shatrughna","Bharath"]

// const values = characters.forEach((item)=>{
//     console.log(item)
//     return item
// })

// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=> {
    return num > 5
})
// console.log(newNums);


const newNums2 = []
myNums.forEach((num)=>{
    if(num > 4){
        newNums2.push(num)
    }
})
// console.log(newNums2)

const nums2 = [1,2,3,4,5,6,7,8,9,10]
const result = nums2.map((num)=>{
    return num = num +10
})

console.log(result)
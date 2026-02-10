const myNums = [1,2,3]
// const initialValue = 0
const total = myNums.reduce((acc,currVal)=> {
    console.log(`acc: ${acc} and currval: ${currVal}`);
    
    return acc+currVal
},10)
console.log(total);

const codding=['cpp','ruby','python','js','swift']

// const values = codding.forEach( (item) =>{
// console.log(item); 
// return item  //for each not return any value
 
// })

// console.log(values);


//for return ,condition check use below code

const myNum=[1,2,3,4,5,6,7,8,9,10]

// let newNum = myNum.filter( (num) => 
//     {
//          return num >4 
//     }) //filter also callback ,here when we used {} means start scope then return keyword must be write
// console.log(newNum);

//above same work but without filter
const newNums = [];

myNum.forEach((num) => {
    if (num > 4) {
        newNums.push(num);
    }
});

console.log(newNums);

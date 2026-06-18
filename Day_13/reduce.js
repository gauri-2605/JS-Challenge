//reduce
/*
accumulator and currentvalue ,accumulator:it is empty variable for first time it accumulator +currentvalue
accumulator takes initialvalue at starting.

*/

const myNums =[1,2,3]

// const myTotal = myNums.reduce( function (acc,currval)
// {
//     console.log(`acc: ${acc} and currval:${currval}`);
    
//     return acc + currval
// },4) //0 is acc value ,start from 0

// console.log(myTotal);

//same above code using arrow function

// const myTotal =myNums.reduce((acc,currval) => acc + currval ,0)
// console.log(myTotal);


const shoppingCart =[
    {
        itemName: "js course",
        price:2999
    },
     {
        itemName: "mobile dev course",
        price:5999
    },
     {
        itemName: "DS course",
        price:12999
    },
     {
        itemName: "py course",
        price:999
    },
] //add above all prices so reduce used

 const priceToPay= shoppingCart.reduce( (acc,item) => (acc + item.price),0)
 console.log(priceToPay);
 
const myNumbers =[1,2,3,4,5,6,7,8,9,10]

// const newNum = myNumbers.map( (num) =>num+10) // when used {} then ({return  num +10})
// console.log(newNum);


//Chaining

const newNums = myNumbers
        .map((num) => num * 10 )           //In chaining,first method result goes to second chain.like result of first method 10 ,it add 1 so it is 11
        .map((num) =>num +1 )   
        .filter((num) => num >=40)            //but here i want one one number add
console.log(newNums);

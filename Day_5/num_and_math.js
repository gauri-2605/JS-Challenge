// const score = 400


// //for explicitily define datatypes
// const balance =new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const anotherNumber=123.8966
// console.log(anotherNumber);
// console.log(anotherNumber.toPrecision(3));

// const hundreds= 1000000
// console.log(hundreds.toLocaleString()); //US standards by default  for indian en-IN


// Maths,In js maths library comes by default

console.log(Math);
console.log(Math.abs(-3));

console.log(Math.round(10.9));
console.log(Math.ceil(6.1));
console.log(Math.floor(6.1));
console.log(Math.min(4,5,6,78));
console.log(Math.max(4,5,6,78));

console.log(Math.random());//always values comes between 0 and 1 
console.log((Math.random()*10)+1); // values shoift to left by *10
console.log(Math.floor(Math.random()*10)+1);

// const min =10
// const max =20
// console.log(Math.floor(Math.random()*(max-min+1))min)


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)





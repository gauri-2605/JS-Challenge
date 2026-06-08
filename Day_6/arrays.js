const myArr =[ 0 ,1 ,2 ,3 ,4 ,5] //elememts also different types
const heros =['shaktiman', 'nagraj',]

const myArr2 = new Array(0,1,2,3,4) // another method for array declare
// console.log(myArr[5]);

//NOTE:in arrays also prototypes,length acces get

//Array Methods

// myArr.push(6,7,8,9) // or single also lie push(9)
// myArr.pop()
// myArr.unshift(111) // it is add value at starting positiion so need to shift every elements
// myArr.shift() // removes element of start

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(19));  // when not elements  present it givs -1

const myArr3 = myArr.join()

console.log(typeof myArr);
console.log( typeof myArr3);


//slice,splice 
//IMP 

console.log("A ",myArr);
const myn1 = myArr.slice(1, 3) // 1 ,2 include and 3 not include

console.log(myn1);
console.log("B ",myArr);

//splice

const myn2 = myArr.splice(1, 3) // 1 ,2 include and 3 not include

console.log("C ",myArr);
console.log(myn2);
console.log(myn1);





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

// console.log(typeof myArr);
// console.log( typeof myArr3);


//slice,splice 
//IMP 

// console.log("A ",myArr);
// const myn1 = myArr.slice(1, 3) // 1 ,2 include and 3 not include

// console.log(myn1);
// console.log("B ",myArr);

//splice

const myn2 = myArr.splice(1, 3) // 1 ,2 include and 3 not include

// console.log("C ",myArr);
// console.log(myn2);
// console.log(myn1);



// ARRAY PART 2 ------------------------------------------------------

const marvel_heros =["thor","Ironman", "Spiderman"]
const dc_heros =["superman","flash","batman"]

// marvel_heros.push(dc_heros) // push method add elements on existing array, but concat return an new arrat
// console.log(marvel_heros [3][1]) // here second array is single element in wjeere we push

const allhero = marvel_heros.concat(dc_heros)
console.log(allhero);

//another method spread easy ,widly prefer because in conact only 1 value so
const all_new_heros =[...marvel_heros, ...dc_heros]// ... means sinle elements separate
console.log(all_new_heros);
 
const anotheArr =[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_arr = anotheArr.flat(Infinity)
console.log(real_another_arr);


console.log(Array.isArray("gauri")) // but if convert into array then used from in below show
console.log(Array.from("gauri")) // but if convert into array then used from in below show
console.log(Array.from({name: "Gauri"})) // interesting topic 

let score1=100 // for convert it into arr
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));




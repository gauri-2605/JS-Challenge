const name = "Gauri"
const repoCount = 30

//console.log(name + repoCount +" Value");

//string interpolation 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//for modern we used backstick,ccreate placeholder and injcts 

//another way for string declare
const gameName = new String("hitech-hc")

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(0));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const another = gameName.slice(-8,4) // in slice we also negative values  perform 
console.log(another);

const newStringOne = "   Gauri  " //for remove spaces 
console.log(newStringOne.trim());

const url ="https://hitesh.com/hitesh%20choudhari"//browser not understand spaces

console.log( url.replace('%20','-'))

console.log(url.includes('hitesh'));

//for convert string into array remain


const gameName1="gauri-bg-com"
console.log((gameName1.split('-')));





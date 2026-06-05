//DataTypes Mainly Categorized in 2 types Primitive and Non-Primitive 
//## IMP :How Data store in memory and how we access it on this basis categorized 

/* Primitive : 7 Types,here it is call by values means when we copy from others then original data reference not given,all changes
in copy files

String, Number, Boolean, null(Empty),undefined, Symbol -made value unique ,BigInt

Non-Primitive/Reference: Here memory reference direct allocates

non-primitive DT are functions and functions DT are object-function

Array, Objects, Functions
## IMP :For JS master,object and browsser webevents ,events do

In JS we do not defined language, Js is static or Dynamic ,also see typescript*/

const score = 100
const score1 = 100.12 //here not different for decimal all are in Number

const isLoggedIn=false
const outsideTemp=null
let userEmail;  //  or let username-undefined;

const id= Symbol('123') //here in symbol refence is also different unique
const anotherId=Symbol('123')

console.log(id === anotherId);

const bigNumer=245565696796796797n // when n ,then  automatic bigint 

const heros=['shaktiman','naagraj','doga']//reference types

let obj= 
{
    name:"gauri",
    age:23,
}
//object in {} braces and key-value pair, in object DT  can be any like string ,function ,boolean etc


// now function we wee variable method 

const myFunction =function()
{
   console.log("HELLO JS") ;
}

//for datatypes recognized

console.log(typeof bigNumer);
console.log(typeof score);
console.log(typeof score1);
console.log(typeof heros);
console.log(typeof myFunction);
console.log(typeof obj);
console.log(typeof id);
console.log(typeof outsideTemp);
console.log(typeof isLoggedIn);









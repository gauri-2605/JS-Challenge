/* for declarre objects 2 types used literals and constructor
for singleton when we create constructor then singleton object is created always constructor se singleton made

*/

//Object Literals
//In Object key and values comes

//Object.create // consttuctor methods


const mySym = Symbol("key1")  //  IMP question: symbol ko as key use krna hai


const Jsuser =
{
    name:"Gauri", //here name BTS is string "name"
    "full name" :"gauri badgujar", //so for that  we cannot access using dot 
    [mySym]: "mykey1",
    age:23,
    location:"Dhule",
    email: "gauri@gmal.com",
    isLoggedIn:false,
    lastLoginDays:["Monady" ,"Saturday"]
}

//Object Access

console.log(Jsuser.email) // 1 method also another method as below
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);

console.log(Jsuser[mySym]);   // note simple typeof email  gives undefined beacuse email comes under JsUser so it is JsUser.email
console.log(typeof mySym);  // not property of JsUser it is separate therefore directr typeof
console.log(typeof Jsuser.age);


//for change value

Jsuser.email ="gauri@yahoo.com"
console.log(Jsuser.email);

//Object.freeze(Jsuser) //cannot change values ,not modify

// for object ,function 

Jsuser.greeting = function()
{
    console.log("Hello JS");  
}

// in object ,name ko reference krna hai ,first convert back stick

Jsuser.greetingTwo = function()
{
    console.log(`Hello JS user ,${this.name}`); // for reference same object used this
}

console.log(Jsuser.greetingTwo());
console.log(Jsuser.greeting());

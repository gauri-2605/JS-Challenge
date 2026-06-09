//const tinderUser =new Object()  // singleton 
const tinderUser ={}  //another method for declare ,this is non-singleton

tinderUser.id ="ABC"
tinderUser.name ="Gauri"
tinderUser.isLoggedIn= false

//console.log(tinderUser);

const regularUser= 
{
    gmail:"gauribadgujar@.com",
    fullname:
    {
        userfullname:
        {
            firstname:"GAuri",
            lastname:"Badgujar"
        }
        
    }
}
console.log(regularUser.fullname.userfullname)

const obj1= {1: "a", 2: "b"}
const obj2= {3: "c", 4: "d"}

// const myObj3 = {obj1,obj2}
// console.log(myObj3);

//const myObj3 =Object.assign({}, obj1,obj2)  //{} it is optionl parameteer ,original not modify hence

const obj3 ={... obj1, ...obj2}
console.log(obj3);

//when values comed from DB

const users =[
    {
        id:1,
        email:"gauri@gmail.com"
    },
     {
        id:1,
        email:"gauri@gmail.com"
    },
     {
        id:1,
        email:"gauri@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));// note here result ,data type is in ARRAY
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));




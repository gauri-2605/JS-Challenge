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

//De -structure

const course =
{
   course_name:"JS",
   course_price:"999",
   course_Instructor :"hitesh"
}

console.log(course.course_Instructor)

//when we make code clean ,so again and again course.course_Instructor so use below

const {course_Instructor} =course
console.log(course_Instructor);

 const {course_Instructor: instructor} =course //also gave another name ,here see how we destructure object
// console.log(instructor);

// const navbar = ({}) =>
// { //when {} then this is destructure

// }
// navbar(company ="TCS")


/* API  :APNA KAM DUSRO KO DENA
API nothing but  values comes from backendand how you use this values
in earlier Value comess  in xml this is very complicated ,now it is JSON

JSON look like ,it is object but without name.In JSON keys and value both are string
*/

// {
//   "name" :"Gauri",
//   "course_name" : JS,
//   price: "free"
// }

//Not need ki api always in object ,some time in array

[
    {},
    {},
    {}
]

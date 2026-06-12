//This Keyword tells about current context

const user=
{
    username :"Gauri",
    price :999,

    welcomeMessage :function()   //here task is to that ,any usercomes here then fumction work is welcome to website show so, user anything not only gauri 
    {
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
        
    }
}

user.welcomeMessage()
// user.username="Megha"  // here megha as ouput not come but why come because this,current contect
// user.welcomeMessage()

// console.log(this);  // when we in node environement then this referes beacuse global empty current context is empty
//in browser when engine run ,so global object is Window

// function chai()   // when thisaccess in this then it gives some information
// {
//     let username ="Gauri" //here when access with this.username it gives undefined bcoz it access only in object (Only info can change)
//     console.log(this.username);
    
// }

// chai()


// const chai = function()
// {
//     let username ="Gauri" 
//     console.log(this.username);
// }
// chai()

 const chai = () =>
 {
    let username ="Gauri" 
    console.log(this.username);
 }
 //chai()

 //Arrow function  () =>{}

 const addTwo = (n1,n2) =>
 {
    return n1+n2
 }
 
 //for this 2nd way i.e. implicit returns where {} no 
const addTwo2 = (n1,n2) => n1+n2
const addTwo3 = (n1,n2) => (n1+n2) //why used () bcoz object return ke liye () wrap krna padega
const addTwo5 = (n1,n2) => ({username: "Sammy"})

console.log(addTwo5());

const myArr =[1,2,3,4]
myArr.forEach()
 
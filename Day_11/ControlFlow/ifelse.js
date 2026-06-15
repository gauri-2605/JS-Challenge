/*  Always whole code not to run.Whole code run in conditional based
*/

const  isUserLoggedIn = true //here = it is operator assignment 
const temp =41

if (temp < 50)  //here conditon is true then it goes to inside and run ,if false then code not run
{
   console.log("Temp less than 50");
   
}
else
{
   console.log("Temp greater than 50");
   
}
console.log("Exeted"); // it is always executed it not related to if for that we used else keyword


/*const score = 200
if(score > 100)
{
    const power ="fly"  // var "fly"
    console.log(`User  Power: ${power}`);
}
console.log(`User  Power: ${power}`); //problem here because power is not defined */

 const balance =1000
// if(balance >500) console.log("Test"),console.log("Test2");  //implicit scope only in 1 line but want more then used comma and continue log
 

// if(balance < 500)
// {
//    console.log("Less than 500");
// }
// else if(balance < 750)
// {
//    console.log("Less than 750");
// }
// else if(balance < 900)
// {
//    console.log("Less than 900");
// }
// else
// {
//    console.log("Less than 12000");
// }

const userLoggedIn =true
const debitCard =true
const loggedInFromGoogle = false
const logggedInFromGmail =true

if(userLoggedIn && debitCard && 1==1) //Both condition must be true
{
   console.log("Allow to Buy Courses");
}
if(loggedInFromGoogle || logggedInFromGmail) //check multiple conditions
{
   console.log("user logged in");
}

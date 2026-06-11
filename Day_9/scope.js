// // let a = 10
// // const b =20
// // var c =30

// /*
// when {} it comes with function ,if -else then it is scope of this */

// //var c =300
// let a =100

// if(true)
// {
//     let a = 10   // so here in that a,b,c are only in if they goes outside scope then problem
//     const b =20
//     //var c =30  // or without variable like c=30
//     console.log("INNER" ,a );
    
// }
// // all code in if is block code and outside global scope ,in global scope we write any value available in block scope
// //but inside block scope  value not goes to outside

//  console.log(a);
// // console.log(b);
// //console.log(c);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
//imp question :scope in environemnt node and after inspect when see scope both different

//nested 
function one()
{
    const username ="Gauri"

    function two()          // here function two can access from one,for that it is global .But one not
    {
        const website ="youtube"
        console.log(username);
        
    }
    //console.log(website); // it gives error because website is under 2 so without scope not access.And line by line exution so after this below not executed
    
    two()

}
one()

if(true)
{
    const username ="gaurii"

    if(username ==="gaurii")
    {
         const website= " youtube"
         console.log(username +website)
    }
    //console.log(website);
    
}
//console.log(username);
///////////////////////////////////// INTERESTING /////////////////////////////////////

//addone(5)
function addOne(num)
{
     return num+1
}
addOne(2) //here only return value not print

//for that
const addTwo = function(num)
{
    return +num+2
}
addTwo(5)

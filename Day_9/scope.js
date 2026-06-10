// let a = 10
// const b =20
// var c =30

/*
when {} it comes with function ,if -else then it is scope of this */

//var c =300
let a =100

if(true)
{
    let a = 10   // so here in that a,b,c are only in if they goes outside scope then problem
    const b =20
    //var c =30  // or without variable like c=30
    console.log("INNER" ,a );
    
}
// all code in if is block code and outside global scope ,in global scope we write any value available in block scope
//but inside block scope  value not goes to outside

 console.log(a);
// console.log(b);
//console.log(c);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

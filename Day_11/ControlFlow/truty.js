const userEmail ="gauri@123" //so here we not check soanything comes []()

if (userEmail)
{
    console.log("Allows");   
}
else
{
    console.log("No allow"); 
}

/*
Falsy Values:

1.false, 0, -0, BigInt 0n , "" ,null, undefined, NaN

Truthy values:

1. "0",'false', " ",[], {},function(){}  */

// if(userEmail.length ===0)
// {
//     console.log("ARAY IS EMPTY");
// }

const emptyObj ={}

if(Object.keys(emptyObj).length ===1)
{
    console.log("Object is empty");
}

//NUllish Coalescing operator (??) -here only see NULL or Undefined

let val1;
// val1 =5 ?? 10 //when call from DB,firebase then we do not get response,get 2 values,so in that it ,ay be null ,undefined
// val1 =null ?? 10 // here if null comes then comes safety

// var1 =undefined ??10
val1 =null ?? 9 ?? 14 //here who comes first ,it execute
console.log(val1);

//Terniary OperTor

// condition ? true : false < :less thann ,>:greater than

const iceTeaPrice =100
iceTeaPrice <=80 ? console.log("LESS THAN 80"):console.log("MORE THAN 80");


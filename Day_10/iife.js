//Immediately Invoked Function Expression (IIFE)
 
//global cope ke pollution se prblm hoti kai baar ,so usko remove krne ke liye
//function ko immdediate exexute krna

(function one()   //named IIFE
{
    console.log(`DB Connected`);
    
})() ;// iife uswed kiya hai ()   ,()-> for function wrap ()->execution


//one() // here it is run there is no problem but when in global scope there things are polluted so therefore iife


//above function can be write using arrow

// ( function aurchai()
// {
//     console.log(`DB CONNECTED 2`);
    
// } )() /*here error is that in iife ,it is invoked but dont know where to stop context so for that ; used
// first code must be end then 2nd start
/* same as above ,in above function name */


( (name) =>    // simple iife
{
    console.log(`hii ${name}`);
    
})("gauri")
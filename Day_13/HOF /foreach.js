const codding=['cpp','ruby','python','js','swift']

// codding.forEach( function (item)
// {
//     console.log(item);
// })  //now here it is call back so remove name function ,bacuase function is in array

// codding.forEach( (item) => {
//     // console.log(item);
    
// })

// function printMe(item)
// {
//     console.log(item);
    
// }
// codding.forEach(printMe)

// codding.forEach((item,index,arr)=>
// {
//     console.log(item,index,arr);
    
// })

//IN ARRAY ,THERE ARE OBJECT SO FOR SINGLE USE FOR EACH

const myCodding =[
    {
        languageName:"js",
        languageFile :"js1"
    },

    {
        languageName:"cpp",
        languageFile :"cpp1"
    },
      
    {
        languageName:"python",
        languageFile :"py"
    },

]

myCodding.forEach((val) =>
{
    console.log(val.languageName);
    
})
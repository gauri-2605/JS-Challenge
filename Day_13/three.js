// //for of

// // ["","",""]
// // [{},{}]

// // const myArr =[1,2,3,4,5]

// // for (const element of myArr) {
// //     console.log(element);
// // }

// const greeting="Hello JS"
// for (const greet of greeting)
// {
//     if(greet == ' ') //here ''=>rmpty string ' ' =>space
//     {
//         continue
//     }
//     // console.log(`Each char is ${greet}`);
// }

// //Maps is object ,in object insertion order not remember ,but map remember.Unique values there


// const map =new Map()
// map.set('IN',"INDIA")
// map.set('USA',"United States of America")
// map.set('Fr',"France")

// // console.log(map);

// for (const [key,value] of map) {  //for print different key and value
//    console.log(key,":",value);
    
// }

// //for object  so in object this forof not work

// const myObj ={
//      game1:  'NFS',
//     'game2':  'freefire'
// }
// for (const [key,value] of myObj) {
//    console.log(key, ':',value)
// }

// //for above prblm use below method for in 

// const myObject={
//     js:"JAVASCRIPT",
//     cpp:"C++",
//     rb:"ruby",
//     swift:"swift by apple"
// }
//for of

// ["","",""]
// [{},{}]

// const myArr =[1,2,3,4,5]

// for (const element of myArr) {
//     console.log(element);
// }

const greeting="Hello JS"
for (const greet of greeting)
{
    if(greet == ' ') //here ''=>rmpty string ' ' =>space
    {
        continue
    }
    console.log(`Each char is ${greet}`);
}

//Maps is object ,in object insertion order not remember ,but map remember.Unique values there


const map =new Map()
map.set('IN',"INDIA")
map.set('USA',"United States of America")
map.set('Fr',"France")

console.log(map);

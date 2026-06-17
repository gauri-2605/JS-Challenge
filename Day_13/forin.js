const myObject={
    js:"JAVASCRIPT",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
//   console.log(key);
}

//for value,above only gives keys

for (const key in myObject) {
//   console.log(myObject[key]);
  console.log(`${key} shortcut is for ${myObject[key]}`);
  
}

const arr =["js","cpp","ruby","python"]

for (const key in arr) { //here when we say key then it gives index numbers.In array key start from 0 to continue
                                 //but in object bydefault any keys we can write
   console.log(arr[key] );
    
}

const map =new Map()   //for map ,for in is not iterable ,so not execute
map.set('IN',"INDIA")
map.set('USA',"United States of America")
map.set('Fr',"France")

for (const key in map) { 
    console.log(key);
}
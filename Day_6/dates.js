//dates are rerprsent single moment they are begin from 1 jan 1970 UTC,
//dates calculated in milli second

let myDate = new Date()// this is date object,instance
// console.log(myDate);//not readable therefore convert into string

// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);


//let myCreatedDate = new Date(2026, 4, 23)// months start from 0
//console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2026, 4, 23,6, 8)// fror add more llike time
// console.log(myCreatedDate.toLocaleString());//here dates comes but which 1 therefore we used . and method name

//for YYYY-MM-DD 
let myCreatedDate = new Date("2026-01-23") // in single digit so count from 0 in array ,here month from 1 
console.log(myCreatedDate.toLocaleString());

let mytimestamp =  Date.now()
console.log(mytimestamp); // now it is long digit ,milliseconds hai 
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //  for convrt into seconds but when divides 1000  gives decimal


let newdates = new Date()
console.log(newdates);
console.log(newdates.getDay());//Date.prototype.getDay() returns the day of the week, not the day of the month.
//0 means sunday
console.log(newdates.getMonth()  +1); // +1 for for jan 1 start
console.log(newdates.getDate());

//`$ { newDate.getDay()} and yime is `

console.log(newdates.toLocaleString('default',
    {weekday:"narrow" ,timeZone:"Asia/Kolkata"}))//ctrl + space for suggesition 


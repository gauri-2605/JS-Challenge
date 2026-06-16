//forloop

for (let i = 0; i < 10 ;/* this is condition check*/i++) { //for duplicate ctel d and enter
    const element = i

    if(element ==5)
    {
        // console.log("5 is the best number");
    }
    // console.log(element);
}
// console.log(element);

for (let i = 1; i <=10; i++) 
{
    // console.log(`Outer Loop  ${i}`);
    for (let j = 1; j <=10; j++) 
    {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j)
    }
    
}
const myArr =['GAURI','MEGHA','SHIV','RAM']
// console.log(myArr.length);
for (let i = 0; i <= myArr.length; i++) 
{
    const element = myArr[i];
    // console.log(element);
    
}
//break and continue

for (let index = 0; index <=20; index++) 
{
    if(index ==5)
    {
        // console.log("5 Detected");
        // break
    }  
    // console.log(`value of Index is ${index}`);
        
}

for (let index = 0; index <=20; index++) 
{
    if(index ==9)
    {
        console.log("9 Detected");
        continue
    }  
    console.log(`value of Index is ${index}`);
        
}


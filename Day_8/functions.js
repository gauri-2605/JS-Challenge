
function sayMyName(){
    console.log("G");
    console.log("a");
    console.log("u");
    console.log("r");
    console.log("i");
    
}

// sayMyName() //with() function exexution without reference

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2 //after result nothing print
}

const result = addTwoNumbers(3, 5) //here when we use return always use variable to store result without only log nothing 
console.log("Result: ", result);

//In js when accept input in function definition then it is parameter
// and when in function call it is arguments


function loginUserMessage(username = "sam"){ // sam default value we not goes in if because never it undefined 
    if(!username){                           //username ===undefined ,is situation is true
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("gauri"))
// console.log(loginUserMessage()) // when we not pass anything it is undefined


function calculateCartPrice(...num1){//rest operator all items are single unko  ek krne ka kam also val1, val2, kr skte
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

// how object pass in function
const user = {
    username: "gauri",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//two methods for pass object
// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

//for pass array

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
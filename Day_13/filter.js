//filter only based on true or false
const codding=['cpp','ruby','python','js','swift']

// const values = codding.forEach( (item) =>{
// console.log(item); 
// return item  //for each not return any value
 
// })

// console.log(values);


//for return ,condition check use below code

const myNum=[1,2,3,4,5,6,7,8,9,10]

// let newNum = myNum.filter( (num) => 
//     {
//          return num >4 
//     }) //filter also callback ,here when we used {} means start scope then return keyword must be write
// console.log(newNum);

//above same work but without filter
const newNums = [];

myNum.forEach((num) => {
    if (num > 4) {
        newNums.push(num);
    }
});

console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userbooks = books.filter( (bk)=> bk.genre === 'History')
userbooks = books.filter( (bk)=> bk.publish >= 1995 && bk.genre === 'History')

console.log(userbooks);



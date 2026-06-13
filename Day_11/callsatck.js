/*   JS Execution Context  :How to run code file 

Run in 2 Phase 

First code gives to JS ,so  first thing is GLOBAL EC always created ,it refere to this 
browser GEC is window.Run in thread ,JS is single threaded.

1.Global EC
2.Functional EC
3.Eval EC  :Mongos,and all inludes

Also Memory creation phase: Only for variables memory alloctaed
Execution Phase:-,+ math operation here runs
*/


let val1=12
let val2=11

function addNUm(n1,n2)
{
    let total =n1+n2;
    return total
}
let result = addNUm(val1, val2)
console.log(result);



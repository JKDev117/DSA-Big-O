/* 7. Factorial ------------------------------------------------------------------ */
let ticks = 0

function factorial(n){
    //base case
    if(n===1){
        ticks++
        return n;
    }
    //general case
    ticks++
    return n * factorial(n-1)
}

factorial(1)
console.log({ticks})
ticks=0

factorial(5)
console.log({ticks})
ticks=0

factorial(50)
console.log({ticks})
ticks=0


//node 7-factorial.js
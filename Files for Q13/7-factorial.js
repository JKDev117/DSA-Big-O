/* 7. Factorial ------------------------------------------------------------------ */
function factorial(n){
    //base case
    if(n===1){
        return n;
    }
    //general case
    return n * factorial(n-1)
}

console.log(factorial(5))


/*
    input to program: 5
    output of the program: 120
    input to each recursive call: 4, 3, 2, 1
    output of each recursive call: 
        4 * factorial(3) => 24
        3 * factorial(2) => 6
        2 * factorial(1) => 2
-------------------------------------------------------------------------------------- */

//node 7-factorial.js
/* 2. Power Calculator ---------------------------------------------------------------- */
let ticks = 0

function powerCalculator(base, exponent) {
    //base case
    if(exponent===0){
        ticks++
        return 1;
    } 
    if(exponent < 0){
        ticks++
        return "Exponent should be >= 0"
    }
    //general case
    ticks++
    return base * powerCalculator(base, exponent - 1)    
}

powerCalculator(2, 0);
console.log({ticks})
ticks=0

powerCalculator(2, 1);
console.log({ticks})
ticks=0

powerCalculator(2, 2);
console.log({ticks})
ticks=0

powerCalculator(2, 10);
console.log({ticks})
ticks=0

//node 2-power-calculator.js
/* 4. nth Triangular Number ------------------------------------------------------------------ */

let ticks=0

function triangularNum(nth) {
    //base case
    if(nth === 1){
        ticks++
        return nth;
    }
    //general case
    ticks++
    return nth + triangularNum(nth - 1)
}

const sequence = [1,3,6,10,15,21,28,36,45];



triangularNum(1);
console.log({ticks})
ticks=0

triangularNum(10);
console.log({ticks})
ticks=0


triangularNum(45);
console.log({ticks})
ticks=0
//node 4-nth-triangular-number.js
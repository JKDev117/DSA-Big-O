//#10. What Am I?

//Q. What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

/* 
Answer: Tells you whether the number is a prime number. It is O(n) because running time is directly
proportional to the size of the input.
*/

function isWhat(n) {
    let ticks = 0;
    if (n < 2 || n % 1 !== 0) {
        ticks++;
        return {number:n, isPrime: false, ticks};
    }
    for (let i = 2; i < n; ++i) {
        ticks++;
        if (n % i === 0) return {number:n, isPrime:false, ticks};
    }
    //ticks++
    return {number:n, isPrime: true, ticks};
}


[-3,-2,-1,0,1,2,3,4,5,6,7, 173, 281, 7919, 7920].forEach(element => 
    console.log(isWhat(element))
)


//node 10-what-am-i.js





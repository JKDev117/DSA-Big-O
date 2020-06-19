//#7. Compute the sequence

//Q. What does the following algorithm do? What is its runtime complexity? Explain your answer.

/*
It accepts a number greater than or equal to 0 and creates an array of length of that number. Each element that is not the first two elements will be the sum of the previous 2 elements.

Runtime complexity is O(n) because running time is directly proportional to the size of the input. Or in this case, the value of the input.

*/

function compute(num) {
    let result = [];
    let ticks = 0;
    for (let i = 1; i <= num; i++) {
        if (i === 1) {
            ticks ++;
            result.push(0);
        }
        else if (i === 2) {
            ticks ++;
            result.push(1);
        }
        else {
            ticks ++;
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return {result, ticks};
}

console.log(compute(1))
console.log(compute(2))
console.log(compute(3))
console.log(compute(4))

//node 7-compute-the-sequence
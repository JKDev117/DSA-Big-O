//#2. Even or Odd

//Q. What is the Big O of the following algorithm? Explain your answer.

function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

/*
Answer: O(1) because the modulus operator used on 2 operands does not depend on the input size. 
Therefore, the algorithm's running time is not affected by the size of the input.
*/


//node 2-even-or-odd
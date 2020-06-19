//#5. Naive search

//Q. What is the Big O of the following algorithm? Explain your answer

//Answer: O(n) because running time is directly proportional to the size of the input.

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

//node 5-naive-search.js
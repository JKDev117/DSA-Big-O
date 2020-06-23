//#12. Iterative version
//node 12-iterative-version

//Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

//1. Counting Sheep
function countSheep(n){  
    for(let i=n; i>=0; i--){
        if(i===0){
            console.log(`All sheep jumped over the fence`)
        } else {
            console.log(`${i}: Another sheep jumps over the fence`)
        }
    }
}

//countSheep(0)
countSheep(3)
console.log('--------------------------------------')


//2. Power Calculator
function powerCalculator(base, exponent){
    let val=base
    if(exponent===0){
        return 1
    }
    if(exponent===1){
        return base
    }
    for(let i=exponent; i>1; i--){
        val*=base
    }
    return val
}

console.log(powerCalculator(2, 0))
console.log(powerCalculator(2, 1))
console.log(powerCalculator(2, 2))
console.log(powerCalculator(2, 3))
console.log('--------------------------------------')


//3. Reverse String
function reverseString(string){
    if(string.length <= 1){
        return string
    }
    const arr1 = string.split('')
    const arr2 = []
    for(let i=0; i < string.length; i++){
        arr2.push(arr1.pop())
        console.log(arr2)
    }
    return arr2.join('')
}

console.log(reverseString("ab"))
console.log('--------------------------------------')


//4. nth Triangular number
function nthTriangularNum(num){
    if(num===1){
        return num
    }
    if(num > 1){
        let val = 0
        for(let i=1; i<=num; i++){
            val+=i
        }
        return val
    }
}

console.log(nthTriangularNum(1))
console.log(nthTriangularNum(2))
console.log(nthTriangularNum(3))
console.log(nthTriangularNum(4))
console.log('--------------------------------------')


//5. String Splitter

function stringSplit(string){
    const array = []
    let word = ''
    for(let i = 0; i<string.length; i++){
        if(string.charAt(i) != '/'){
            word += string.charAt(i)
        } else {
            array.push(word)
            word = ''
        }
    }
    array.push(word)
    return array
}


console.log(stringSplit("02/20/2020"))
console.log(stringSplit(""))
console.log(stringSplit("2020"))
console.log('--------------------------------------')


//6. Fibonacci

function fibonacci(num){
    const array = [1, 1]

    if(num==0){
        return []
    } else if(num==1){
        return [1]
    } else if(num==2){
        return [1, 1]
    } else {
        for(let i=2; i<num; i++){
            array.push(array[i-2]+array[i-1])
        }
        return array
    }
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(7))
console.log('--------------------------------------')


//7. Factorial

function factorial(num){
    if(num >=0 && num < 3){
        return num
    }
    if(num >= 3){
        let val=num
        for(let i=num-1; i>0; i--){
            val *= i
        }
        return val
    }
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))


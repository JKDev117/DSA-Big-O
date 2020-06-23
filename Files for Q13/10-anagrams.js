/* 10. Anagrams ------------------------------------------------------------------ */

let ticks = 0

function anagrams(word, candidate=""){
    if (word.length == 0) {
        ticks++
        //console.log(candidate);
    }

    for (let i = 0; i < word.length; i++){
        ticks++
        newCandidate = candidate + word.charAt(i);
        newword = word.substring(0, i) + word.substring(i + 1);
        anagrams(newword, newCandidate);
    }
    
}

anagrams("ab")
console.log({ticks})
ticks=0

anagrams("abc")
console.log({ticks})
ticks=0




//node 10-anagrams.js

/* 10. Anagrams ------------------------------------------------------------------ */

function anagrams(word, candidate="")
{
    if (word.length == 0) {
        console.log(candidate);
    }

    for (let i = 0; i < word.length; i++){
        newCandidate = candidate + word.charAt(i);
        newword = word.substring(0, i) + word.substring(i + 1);
        anagrams(newword, newCandidate);
    }
}

anagrams("ab")
anagrams("abc")

/*
    input to program: "ab"
    output of the program:
        "ab"
        "ba"
    input to each recursive call:
        ("b", "a")
        ("", "ab")
        ("a", "b")
        ("", "ba")
    output of each recursive call:
        -
        "ab"
        -
        "ba"

-------------------------------------------------------------------------------------- */



//node 10-anagrams.js

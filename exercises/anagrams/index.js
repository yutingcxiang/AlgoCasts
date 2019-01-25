// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let strA = stringA.toLowerCase();
    let strB = stringB.toLowerCase();

    let a = strA.replace(/[^A-Z0-9]/ig, "");
    let b = strB.replace(/[^A-Z0-9]/ig, "");

    let charsA = {};
    let charsB = {};

    if (a.length !== b.length) {
        return false;
    }

    for (let i=0; i<a.length; i++){
        if (!charsA[a[i]]){
            charsA[a[i]] = 1;
        } else {
            charsA[a[i]]++;
        }

        if (!charsB[b[i]]){
            charsB[b[i]] = 1;
        } else {
            charsB[b[i]]++;
        }
    }

    for (let letter in charsA){
        if (charsA[letter] !== charsB[letter]){
            return false
        }
    }

    return true;
}

module.exports = anagrams;

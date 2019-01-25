// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {};

    for (let i=0; i<str.length; i++){
        if (chars[str[i]]){
            chars[str[i]]++;
        } else {
            chars[str[i]] = 1;
        }
    }

    let max = 0;
    let maxChar;

    for (let char in chars){
        if (chars[char] > max){
            max = chars[char];
            maxChar = char;
        }
    }
    debugger;
    return maxChar;
}

maxChar("abcdefghijklmnaaaaa");

module.exports = maxChar;

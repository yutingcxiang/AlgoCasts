// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     let space;
//     let hash;
//     let step;

//     for (let i=0; i<n; i++){
//         space = n - i - 1;
//         hash = 2*i + 1;
//         step = " ".repeat(space) + "#".repeat(hash) + " ".repeat(space);
//         console.log(step);
//     }
// }

function pyramid(n) {
    let space;
    let hash;

    for (let i=0; i<n; i++) {
        hash = 2*i + 1
        space = n - i + 1;
        console.log(" "*space + "#"*hash + ""*space);
    }
}

module.exports = pyramid;

// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let arr = [];
    let counter = 1;
    let startRow = 0;
    let startColumn = 0;
    let endRow = n-1;
    let endColumn = n-1;

    for (let i=0; i<n; i++) {
        arr.push([])
    }

    while (startColumn <= endColumn && startRow <= endRow){
        for (let i=startColumn; i<=endColumn; i++){
            arr[startRow][i] = counter;
            counter++
        }
        startRow++;

        for (let j=startRow; j<=endRow; j++){
            arr[j][endColumn] = counter;
            counter++
        }
        endColumn--

        for (let k=endColumn; k>=startColumn; k--){
            arr[endRow][k] = counter;
            counter++
        }
        endRow--

        for (let n=endRow; n>=startRow; n--){
            arr[n][startColumn] = counter;
            counter++
        }
        startColumn++
    }

    return arr;
}

module.exports = matrix;

// 1572. Matrix Diagonal Sum
// https://leetcode.com/problems/matrix-diagonal-sum/

let diagonalSum = function(mat) {
    let sum = 0;
    let row = mat.length;
    let column = mat[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++){
            if ((i == j) || ((i + j) == row - 1)) {
                sum += mat[i][j];
            }
        }
    }
    return sum;
};
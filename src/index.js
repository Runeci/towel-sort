
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newArr = [];
    if(!matrix) {
        return []
    }

    for (let a = 0; a < matrix.length; a++)
        if (a%2 !== 0) {
            matrix[a].reverse();
        }

    for (let i = 0; i < matrix.length; i++) {
        newArr = newArr.concat(matrix[i]);
    }
    return newArr;
};

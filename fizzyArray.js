//takes numbers and put them in an array

function numarray(n) {
    resultArr = [n];
    for (i = 0; i < n; i++) {
        resultArr[i] = i;
    }
    console.log(resultArr);
}
//this starts my method
numarray(14);
numarray(4);
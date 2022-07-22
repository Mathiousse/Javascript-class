sumBasis = Math.floor(Math.random() * 101)
let total = 0

/*
function sumFirstIntegers(n){
    while (n != 0) {
        total = total + n
        n = n - 1
    }
    return total
}
*/

function sumFirstIntegers(n) {
    if (n > 0) {
        return (n + sumFirstIntegers(n - 1))
    }
    return n
}



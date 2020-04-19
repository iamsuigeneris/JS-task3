
function NumberChecker(num) {
    let result = []
    for (let i = 1; i <= num; i++) {
        // num divisible by 2,3,5 
        if((i % 2 == 0) && (i % 3 == 0) && (i % 5 == 0)){
            result.push('yu-gi-oh')
        }
        // num divisible by 2,3 only
        else if ((i % 2 == 0) && (i % 3 == 0) && (i % 5 != 0)) {
            result.push('yu-gi')
        }
         // num divisible by 2,5 only
        else if ((i % 2 == 0 ) && (i % 3 != 0) && (i % 5 == 0)) {
            result.push('yu-oh')
        }
        // num divisible by 3,5 only
        else if ((i % 2 != 0) && (i % 3 == 0) && (i % 5 == 0)) {
            result.push('gi-oh')
        }
        // num divisible by 2 only
        else if ((i % 2 == 0) && (i % 3 != 0) && (i % 5 != 0)){
            result.push('yu')
        }
         // num divisible by 3 only
        else if ((i % 2 != 0) && (i % 3 == 0) && (i % 5 != 0)) {
            result.push('gi')
        }
         // num divisible by 5 only
        else if ((i % 2 != 0) && (i % 3 != 0) && (i % 5 == 0)) {
            result.push('oh')
        }
        else {
            result.push(i)
        }
    }
    return result;
}
NumberChecker(10)


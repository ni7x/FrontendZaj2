isHappyNumber = (num) => {
    let sum = getSumOfSquaredDigits(num);
    while(sum !== 1){
        sum = getSumOfSquaredDigits(sum)
    }
    return true;
}


getSumOfSquaredDigits = (num) => {
    return String(num).split("")
                      .map(Number)
                      .reduce((a0, a1) => a0 + a1*a1, 0)
}


console.log(isHappyNumber(19))
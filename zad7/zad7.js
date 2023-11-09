isHappyNumber = (num) => {
    let sum = getSumOfSquaredDigits(num);
    let previous = []
    while(sum !== 1){
        previous.push(sum)
        sum = getSumOfSquaredDigits(sum)
        if(previous.includes(sum)){
            return false;
        }
    }
    
    return true;
}


getSumOfSquaredDigits = (num) => {
    return String(num).split("")
                      .map(Number)
                      .reduce((a0, a1) => a0 + a1*a1, 0)
}

console.log(isHappyNumber(22))
console.log(isHappyNumber(19))
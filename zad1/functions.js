function isOdd(x){
    return Boolean(x%2);
} 

isEven = (x) => Boolean(!(x%2));

console.log(isOdd(5))
console.log(isEven(4))
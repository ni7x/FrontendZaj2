fibonnaci = (n) => {
    if(n==0){
        return [0];
    }else{
        let result = [0, 1]
        for(let i=2; i<n; i++){
            result.push(result[i-1] + result[i-2])
        }
        return result;
    }
}

console.log(fibonnaci(0))
console.log(fibonnaci(1))
console.log(fibonnaci(9))

let range = (start,end) => {
    // base case if start = end then what?
    // return start
    let newArray = [];
    if(start === end) {
        newArray.push(start);
        return newArray;
    }
    newArray.push(end);
    return range(start,end-1).concat(newArray);
}
let newRange = range(1,4);
console.log(range(1,4),"range 1-4");
console.log(typeof(newRange),"range 5");

let sumRec = (array) => {
    let sum = 0;
    let dummyArray = array;
    if(array.length === 0){
        return 0;
    }
    sum += dummyArray.pop(); 
    return sum + sumRec(dummyArray)
}

let sumrecarray = [1,2,3,4]
console.log(sumRec(sumrecarray),"sumRec")

const recExp1 = (base, exp) => {
    if (exp === 0 ){
        return 1;
    }

    return recExp1(base, exp - 1) * base;
}

const recExp2 = (base, exp) => {
    if (exp === 0 ){
        return 1;
    }
    else if (exp === 1){
        return base;
    }

    if (exp % 2 === 0){
        return recExp2(base, exp/2) ** 2;
    }
    else {
        return base * (recExp2(base, (exp - 1) / 2) ** 2);
    }
}

console.log(recExp1(3,2), "recexp1")
console.log(recExp2(3,2), "recexp1")

const fib = (n) => {
    if ( n === 1) {
        return [0];
    }
    else if (n === 2 ){
        return [0,1];
    }
    let lastFib = fib(n-1);
    let fibSum = lastFib[lastFib.length -1] + lastFib[lastFib.length - 2];
    return lastFib.concat(fibSum);
}

console.log(fib(10), "Fibonacci")
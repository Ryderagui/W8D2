Array.prototype.myEach = function(callback) {
    let newArr1 = [];
    for(let i = 0; i < this.length; i++){
         newArr1.push(callback(this[i]));
    }
    return newArr1;
}

let test = [1,2,3];
let doubler = (ele) => { return ele * 2 };
console.log(doubler(3), "Doubler");
console.log(test.myEach(doubler), "my each");

Array.prototype.myReduce = function(callback, initialValue){
    let accumulator = 0;
    if (initialValue){
        accumulator = initialValue;
    }
    for (let i = 0; i < this.length; i++){
        accumulator += callback(this[i]);
    }
    return accumulator;
}

console.log(test.myReduce(doubler), "My Reduce");
console.log(test.myReduce(doubler, 10), "My Reduce, default");
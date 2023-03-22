Array.prototype.isSorted = function() {
    let check = true;
    for (let i = 0; i < this.length - 1; i++){
        if (this[i] > this[i+1]) {
            check = false;
        }
    }
    return check;
}

Array.prototype.bubbleSort = function(){
    while (!this.isSorted()) {
        for (let i = 0; i < this.length - 1; i++){
            if (this[i] > this[i+1]) {
                [this[i], this[i+1]] = [this[i+1], this[i]]
            }
        }
    }
    return this;
}

let arr=[4,3,2,1]
let sorted = [1,2,3,4]
console.log(arr.isSorted(), "Sorted")
console.log(arr.bubbleSort(), "Bubble Sort")

String.prototype.subStrings = function () {
    let substrings = []
    for (let i = 0; i < this.length; i++) {
        let string = this[i]
        substrings.push(string)
        for (let j = 0; j < this.length; j++){
            if(j>i){
                string += this[j]
                substrings.push(string)
            }
        }
    }
    return substrings
}

console.log("hello".subStrings(),"Substrings")




Array.prototype.uniq = function() {
    let newArray = [];
    let lastEle = NaN;
    this.forEach(ele => {
        if(ele !== lastEle){
            newArray.push(ele);
            lastEle = ele;
        }
    })
    return newArray;
                     
}
let array = [1,2,3,3,4];
console.log(array.uniq(),"Unique")

Array.prototype.twoSum = function() {
    let winners = [];
    for(let i = 0; i < this.length; i++){
        for(let j = 0;j < this.length;j++){
            let sum = this[i]+this[j];
            if(j>i && sum === 0){
    
                winners.push([i,j]);
            }}}
    return winners;        
}
let negs = [-1,1,2,3,-4,4];
console.log(negs.twoSum(),"TwoSum");

Array.prototype.transpose = function() {
    let newArray = [] //[[1,2,3],[4,5,6],[7,8,9]]
    for(let i = 0; i < this.length; i++){
        let row = []
        for(let j = 0;j < this[i].length;j++){
            row.push(0)
        }
        newArray.push(row)
    }
    for(let i = 0; i < this.length; i++){
        for(let j = 0;j < this[i].length;j++){
            newArray[i][j] = this[j][i]
        }}
    return newArray
}

let square = [[1,2,3],[4,5,6],[7,8,9]]
console.log(square.transpose(),"Transpose")
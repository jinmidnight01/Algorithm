let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let a = Number(input[0]);
let b = input[1];

let sumList = [];
for (let i=2; i>-1; i--) {
    temp = a * Number(b[i])
    console.log(temp)
    sumList.push(temp)
}

let sum = 0;
for (let i=0;i<3;i++) {
    sum += sumList[i] * 10 ** i
}

console.log(sum)
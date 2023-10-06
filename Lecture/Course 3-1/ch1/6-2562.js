let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let list = input.map(Number);
let maxValue = list.reduce((a,b) => Math.max(a,b));

console.log(maxValue);
console.log(list.indexOf(maxValue)+1)

let data = input.map(Number);
let max = Math.max(...data);

console.log(max)
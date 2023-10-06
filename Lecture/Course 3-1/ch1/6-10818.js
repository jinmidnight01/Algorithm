let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let list = input[1].split(' ');

let min = Number(list[0]); let max = Number(list[0]);
for (let i=0; i<list.length;i++) {
    min = Math.min(Number(list[i]), min);
    max = Math.max(Number(list[i]), max);
}

console.log(min, max);
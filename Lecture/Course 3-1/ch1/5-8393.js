let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString();

let sum = 0;
for (let i=1;i<=Number(input);i++) {
    sum += i;
}
console.log(sum)
let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let total = Number(input[0]);

let result = '';
for (let i=1; i<=total; i++) {
    let [a, b] = input[i].split(' ');
    result += Number(a) + Number(b) + '\n';
}
console.log(result);
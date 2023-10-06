let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n').map(Number);

let moduloSet = new Set();
for (let i=0; i<10; i++) {
    moduloSet.add(input[i] % 42);
}
console.log(moduloSet.size);
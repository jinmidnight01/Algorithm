let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString();

let [a,b,c] = input.split(' ').map(Number);

let output;
if (a===b && b===c) {
    output = 10000 + a * 1000;
} else if (a===b || b===c || c===a) {
    if (a===b) output = 1000 + a * 100;
    else if (b===c) output = 1000 + b * 100;
    else if (c===a) output = 1000 + c * 100;
} else {
    let max;
    if (a < b) max = b;
    else max = a;

    if (max < c) max = c;

    output = max * 100;
}

console.log(output);

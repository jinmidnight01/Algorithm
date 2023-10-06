let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString();

let n = Number(input);

for (let i=1; i<=n; i++) {
    let s = '';
    for (let j=1; j<=i; j++) {
        s += '*';
    }
    console.log(s);
}
let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString();

for (let i=1; i<=9; i++) {
    console.log(Number(input)+" * "+i+" = "+Number(input)*i);
}
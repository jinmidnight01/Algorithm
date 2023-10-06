let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let num = Number(input[0]);

let output = '';
for (let i=1; i<=num; i++) {
    let scoreNum = Number(input[i].split(' ')[0]);
    let scores = input[i].split(' ').map(Number).slice(1,);
    let mean = scores.reduce((a,b) => a+b) / scoreNum;

    let count = 0;
    for (let j=0; j<scoreNum; j++) {
        if (scores[j] > mean) {
            count++;
        }
    }

    output += (count / scoreNum * 100).toFixed(3) + "%\n";
}

console.log(output);
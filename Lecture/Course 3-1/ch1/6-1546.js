let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let scoreNum = Number(input[0]);
let scores = input[1].split(' ').map(Number);
let maxValue = Math.max(...scores);

let newScores = scores.map((e) => (e /  maxValue * 100));

let avg = newScores.reduce((a,b) => a+b) / scoreNum;

console.log(avg);
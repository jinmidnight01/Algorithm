let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let hour = Number(input[0].split(' ')[0]);
let minute = Number(input[0].split(' ')[1]);
let duration = Number(input[1]);

hour = hour + parseInt((minute + duration) / 60);
minute = (minute+duration) % 60;

if (hour >= 24) {
    hour = hour - 24;
}

console.log(hour, minute)

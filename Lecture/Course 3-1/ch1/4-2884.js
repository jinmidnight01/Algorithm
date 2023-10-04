let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString();

let hour =  Number(input.split(' ')[0]);
let minute = Number(input.split(' ')[1]) - 45;

if (minute < 0) {
  minute = minute + 60;
  hour -= 1;
}

if (hour < 0) {
  hour = 23;
}

console.log(hour, minute);
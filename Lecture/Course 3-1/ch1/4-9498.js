let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString();

let a = Number(input);

if (a<60) {
    console.log("F")
}
else if (a < 70) {
    console.log("D")
}
else if (a < 80) {
    console.log("C")
}
else if (a < 90) {
    console.log("B")
}
else if (a <= 100) {
    console.log("A")
}
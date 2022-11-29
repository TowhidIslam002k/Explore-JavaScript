function studentCalculate(present) {
var student = 0;
if (present <= 20) {
    student = present * 100;
} else if (present <= 40) {
    var firstPart = 20 * 100;
    var remaining = student - 20;
    var scondPart = remaining * 200
    student = firstpart + scondPart;
} else {
    var firstPart = 20 * 100;
    var scondPart = 20 * 200;
    var remaining = present - 40;
    var thirdPart = remaining * 300;
    student = firstPart + scondPart + thirdPart;
}
return student;
}

var student = studentCalculate(150);
console.log(student);
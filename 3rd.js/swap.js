let a = 5;
let b = 9;
var temp = a;
a = b;
b = temp;
console.log('After swap: a =', a, 'b=', b);



var x = 5;
var y = 9;
x = x + y;
y = x - y;
x = x - y;
console.log('After swap: x =', x, 'y=', y);



var p = 5;
var q = 7;

[p, q] = [q, p];
console.log('After swap: p =', p, 'q=', q);
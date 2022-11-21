let marks = [45, 55, 65, 75, 85, 95, 105];
let max = marks[0];
for(let i = 0; i < marks.length; i++) {
    var element = marks[i];
    if(element > max) {
        max = element;
    }
}

console.log('Height value is; ', max);
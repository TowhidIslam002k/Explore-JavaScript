let name1 = [3, 6, 8, 5, 34, 6, 3, 67, 65, 82, 5,];
let uniqueName = [];

for(let i = 0; i < name1.length; i++){
var element = name1[i];
var index = uniqueName.indexOf(element);
if(index == -1) {
    uniqueName.push(element);
} 
}
console.log(uniqueName);
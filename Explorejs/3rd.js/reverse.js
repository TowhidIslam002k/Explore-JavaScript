function reverseString(str){
    var reverse = ""
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var statement = 'What is your name.'
var result = reverseString(statement);
console.log(result);
var statement2 = reverseString("Where are from.");
console.log(statement2);
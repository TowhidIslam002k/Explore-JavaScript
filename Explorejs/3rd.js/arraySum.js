function arraySum(num){
    var sum = 0;
    for(var i = 0; i < num.length; i++){
        var element = num[i];
        sum = sum + element;
    }
    return sum;
}
var num = [1, 5, 7, 9];
var result = arraySum(num);
console.log(result);
var total = arraySum([56, 45, 78, 3]);
console.log(total);
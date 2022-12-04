// function evenify(num){
//     var result;
//     if(num % 2 == 0){
//        result = num;
//     }
//     else{
//         result = num;
//     }
//     return result;
// }
// var result = evenify(13);
// var square = result * result;
// console.log('result :',square);



function evenify_all(nums){
    var even_array =[];
    for (var i = 0; i < nums.length; i++) {
       var num = nums[i];
        even_array.push(num);
    }
        return even_array;
    }
var nums = [5, 12, 56, 67, 32, 10];
var nums_even = evenify_all(nums);
console.log(nums_even);
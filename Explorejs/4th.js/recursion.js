function factorialRecursion(num) {
    if (num == 1) {
        console.log(num);
        return 1;
    }else {
        console.log(num, num-1);
        return num * factorialRecursion(num - 1);
    }
}

var result = factorialRecursion(10);
console.log(result);
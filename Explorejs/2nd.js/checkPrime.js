function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'youe number is not a prime number';
        }
    }
            return 'Your number is a prime number';
}

var result = isPrime(17);
console.log(result);
var result = isPrime(18);
console.log(result);
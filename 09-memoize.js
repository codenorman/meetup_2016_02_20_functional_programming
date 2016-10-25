var _ = require('lodash');

var fibonacci = function(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

var fibonacciMemo = _.memoize(function(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});


console.log('START - Not Memoized');
console.log('41',fibonacci(41));
console.log('41',fibonacci(41));
console.log('41',fibonacci(41));

console.log('START - Memoized');
console.log('41',fibonacciMemo(41));
console.log('41',fibonacciMemo(41));
console.log('41',fibonacciMemo(41));
console.log('41',fibonacciMemo(41));
console.log('41',fibonacciMemo(41));
console.log('41',fibonacciMemo(41));
console.log('41',fibonacciMemo(41));
console.log('41',fibonacciMemo(41));
console.log('41',fibonacciMemo(41));


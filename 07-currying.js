var _ = require('lodash');

var sum = function (a, b) {
    return a + b;
};

// non functional
var sum10nf = function(b){
    return sum(10, b);
};

var currySum = _.curry(sum);

var sum10 = currySum(10);
var sum20 = currySum(20);

console.log(sum(3, 4)); // 7
console.log(sum10(2));  // 12
console.log(sum20(2));  // 22


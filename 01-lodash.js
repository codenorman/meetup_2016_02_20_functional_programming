
var _ = require('lodash');
var fs = require('fs');

var loadzips = function () {
    return JSON.parse(fs.readFileSync('./zips.json', 'utf8'));
};

var zips = _.once(loadzips)

console.log('');
console.log('');
console.log('START');
console.log('Zipcodes: ', _.size(zips()));

var totalPopulation = function () {
    var popList = _.map(zips(), 'pop');
    // console.log(popList);

    return _.reduce(popList, function (acc, value) {
        // console.log('current:', acc, value)
        return acc + value;
    }, 0)
};
console.log(totalPopulation());

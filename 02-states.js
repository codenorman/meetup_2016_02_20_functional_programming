var _ = require('lodash');
var fs = require('fs');

var loadzips = function () {
    return JSON.parse(fs.readFileSync('./zips.json', 'utf8'));
};
var zips = _.once(loadzips);

console.log('');
console.log('');
console.log('START');
console.log('Zipcodes: ', _.size(zips()));

var states = function () {
    return _.chain(zips())
        .map('state')
        .uniq()
        .sort()
        .value()
};
console.log(states());


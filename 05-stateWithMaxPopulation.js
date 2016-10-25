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

var stateWithMaxPopulation = function () {
    return _.chain(zips())
        .groupBy('state')
        .map(function (value, key) {
            return {
                state: key, pop: _.reduce(value, function (acc, value) {
                    return value.pop + acc
                }, 0)
            }
        })
        .sortBy('pop')
        .reverse()
        .first()
        .value()
};
console.log('stateMaxPop', stateWithMaxPopulation());


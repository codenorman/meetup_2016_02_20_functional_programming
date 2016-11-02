var _ = require('lodash');
var fs = require('fs');

var loadzips = function () {
    // console.log('Execute Load Zips')
    return JSON.parse(fs.readFileSync('./zips.json', 'utf8'));
};
var zips = _.once(loadzips);

console.log('');
console.log('');
console.log('START');
console.log('Zipcodes: ', _.size(zips()));

var populationByState = function () {
    return _.chain(zips())
        .groupBy('state')
        .map(function (value, key) {
            return {
                state: key, pop: _.reduce(value, function (acc, x) {
                    return x.pop + acc
                }, 0)
            }
        })
        .sortBy('pop')
        .reverse()
        .value()
};
console.log('PopulationByState', populationByState());

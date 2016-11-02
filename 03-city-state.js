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

var selectStateCities = function (state) {
    return _.chain(zips())
        .filter({state: state})
        .map(function (item) {
            return {city: item.city, state: item.state}
        })
        .uniqBy('city', 'state')
        .sortBy('city')
        .value()
};
console.log('StateCities', selectStateCities('CA'));

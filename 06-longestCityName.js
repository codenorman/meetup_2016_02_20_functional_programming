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

var longestCityName = function () {
    return _.chain(zips())
        .map(function(item){
            return { city: item.city, length: _.size(item.city), state: item.state}
        })
        .sortBy('length')
        .reverse()
        .first()
        .value()
};
console.log('longestCityname', longestCityName());


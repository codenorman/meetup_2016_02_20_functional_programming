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

// ************************
// Procedural
var getPopulation = function (){
    var zipList = zips();
    var count = zipList.length;
    var population = 0;

    for(var i = 0; i < count; i++){
        population += zipList[i].pop;
    }
    return population;
};
console.log(getPopulation());

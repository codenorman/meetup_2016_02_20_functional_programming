// ._create
// _.zip
// _.values
// _.keys
// _.pairs
// _.decorator
// currying
// _.memoize
// lamda
// _.reduce
//  _.reduce(_.map(states, 'population), function(sum, nextNum){
//      return sum + nextNum;
//  }
// _.pairs
// _.mapValues
// _.countBy
// _.random
// _.sample
// _.shuffle
// _.throtte  -- 1 in time
// _.debounce -- x time after last call
// _.delay -- wait
// _.chain
// _.tap
// _.bind
// _.bindAll

var _ = require('lodash');
var fs = require('fs');

var loadzips = function () {
    return JSON.parse(fs.readFileSync('./zips.json', 'utf8'));
}
var zips = _.once(loadzips)

console.log('');
console.log('');
console.log('START');
console.log('Zipcodes: ', _.size(zips()))

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

// ************************
var totalPopulation = function () {
    var popList = _.map(zips(), 'pop');
    console.log(popList);
    return _.reduce(popList, function (foo, bar) {
        return foo + bar;
    },0)
};
console.log(totalPopulation());

// ************************
var states = function () {
    return _.chain(zips())
        .map('state')
        .uniq()
        .sort()
        .value()
}
console.log(states())

// ************************
var selectStateCities = function (state) {
    return _.chain(zips())
        .filter({state: state})
        .map(function (item) {
            return {city: item.city, state: item.state}
        })
        .uniqBy('city', 'state')
        .value()
}
console.log('StateCities', selectStateCities('NV'))

// ************************
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
        .value()
}
console.log('PopulationByState', populationByState())

// ************************
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
}
console.log('stateMaxPop', stateWithMaxPopulation());

// ************************
var longestCityName = function () {
    return _.chain(zips())
        .map(function(item){
            return { city: item.city, length: _.size(item.city)}
        })
        .sortBy('length')
        .reverse()
        .first()
        .value()
}
console.log('longestCityname', longestCityName())

// ************************

var sum = function (a, b) {
    return a + b;
}

// non functional
var sum10 = function(a){
    return sum(10,a);
}

var currySum = _.curry(sum)

var sum10 = currySum(10)
var sum20 = currySum(20)
console.log(sum(3, 4));
console.log(sum10(2));
console.log(sum20(2));


var foo = function(){
    _.map(zips(), console.log)
}

foo()
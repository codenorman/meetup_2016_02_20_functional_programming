var _ = require('lodash');

var defaults = {'a': 3, state:'CA'}

console.log(_.defaults({ 'name': 'Brian', 'a': 1 }, { 'b': 2 }, defaults));
console.log(_.defaults( { 'b': 2, 'state': 'OK'}, defaults));



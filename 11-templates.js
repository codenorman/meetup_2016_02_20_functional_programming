var _ = require('lodash');

var words = [
    {
        key: 'field',
        value: [
            {
                lang: 'en',
                word: 'en field'

            },
            {
                lang: 'sp',
                word: 'sp field'
            }
        ]
    },
    {
        key: 'crop',
        value: [
            {
                lang: 'en',
                word: 'en crop'
            },
            {
                lang: 'sp',
                word: 'sp crop'
            }
        ]
    },
    {
        key: 'corn',
        value: [
            {
                lang: 'en',
                word: 'en corn'
            },
            {
                lang: 'sp',
                word: 'sp corn'
            }
        ]
    },
    {
        key: 'wheat',
        value: [
            {
                lang: 'en',
                word: 'en wheat'
            },
            {
                lang: 'sp',
                word: 'sp wheat'
            }
        ]
    }
];




function getWord2(key, lang) {

    var word = _.chain(words)
        .find({'key': key})
        // .tap(function (item) {
        //     console.log('w:', item)
        // })

        .get('value')
        // .tap(function (item) {
        //     console.log('pick:', item)
        // })
        .find({'lang': lang})
        // .tap(function (item) {
        //     console.log('v:', item)
        // })
        .value();



    return word.word;

}

// console.log('result:', getWord2('field', 'en'));
// console.log('result:', getWord2('field', 'sp'));
// console.log('result:', getWord2('corn', 'en'));
// console.log('result:', getWord2('wheat', 'sp'));


var translate = _.template('This is a test <%= field %>!');

console.log( translate({field: getWord2('field', 'en')}));
console.log( translate({field: getWord2('field', 'sp')}));


_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
var translate2 = _.template('This is a test {{field}}!');

// console.log( translate2({field: getWord2('field', 'en')}));
// console.log( translate2({field: getWord2('field', 'sp')}));



var translate3 = _.template("The {{cropType}} {{crop}} is planted on the {{field}}");
console.log( translate3({crop: getWord2('crop', 'en'), cropType: getWord2('corn', 'en'), field: getWord2('field', 'en')}));
console.log( translate3({crop: getWord2('crop', 'sp'), cropType: getWord2('corn', 'sp'), field: getWord2('field', 'sp')}));
console.log( translate3({crop: getWord2('crop', 'en'), cropType: getWord2('wheat', 'en'), field: getWord2('field', 'en')}));
console.log( translate3({crop: getWord2('crop', 'sp'), cropType: getWord2('wheat', 'sp'), field: getWord2('field', 'sp')}));


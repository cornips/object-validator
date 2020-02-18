const validateObject = require('../helpers');

// Set scheme
const barScheme = {
    name: 'string',
    address: 'string',
    drinks: 'object',
};

// Validates true
const barObj = {
    name: 'Jimmys drinks',
    address: 'Somewhere over the rainbow',
    drinks: {
        beer: ['Straffe Hendrik', 'Rochefort', 'St Bernard'],
    },
};

// Validates false
const barObjF = {
    name: 'Sjonnies',
    address: 'Centrum 001',
    drinks: [ // < No object
        'Heineken',
    ]
};


test('Validate a valid bar object', () => {
  expect(validateObject(barObj, barScheme)).toBe(true);
});

test('Validate an invalid bar object', () => {
  expect(validateObject(barObjF, barScheme)).toBe(false);
});

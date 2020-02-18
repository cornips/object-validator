const validateObject = require('../helpers');

// Set scheme
const personSchema = {
   name: 'string',
   age: 'number',
   siblings: 'array',
   metaData: 'object',
   active: 'boolean',
};

// Validates true
const personObj = {
    name: 'James',
    age: 25,
    siblings: ['Johnnathan'],
    metaData: {},
    active: true,
};

// Validates false
const personObjF = {
    name: 'James',
    age: 25,
    active: true,
};


test('Validate a valid person object', () => {
  expect(validateObject(personObj, personSchema)).toBe(true);
});

test('Validate an invalid person object', () => {
  expect(validateObject(personObjF, personSchema)).toBe(false);
});

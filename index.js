const validateObject = require('./helpers');

// Set scheme
const personScheme = {
   name: 'string',
   age: 'number',
   siblings: 'array',
   metaData: 'object',
   active: 'boolean',
};

// Set object
const personObj = {
   name: 'James',
   age: 25,
   siblings: ['Johnnathan'],
   metaData: {},
   active: true,
};

console.log(validateObject(personObj, personScheme))

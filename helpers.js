const validateObject = (object, scheme) => {

  // Validate if all required fields are provided
  if (Object.entries(object).length !== Object.entries(scheme).length) {
    console.error(`Object does not contain all required fields according to scheme`)
    return false
  }

  for (let [key, value] of Object.entries(object)) {

    // Check if key exists in scheme
    if (Object.keys(scheme).indexOf(key) < 0){
      return false
    }


    // typeof Array is object, so check object isn't Array
    if (scheme[key] == 'object' && Array.isArray(value)){
      // An inconsistency was definitely found according to scheme
      console.error(`${key} is of type array, should be ${scheme[key]}`)
      return false
    }

    // Check if value is as expected from scheme
    if (typeof value !== scheme[key]){

      // typeof Array is object, so check that on first fail
      if (scheme[key] == 'array' && Array.isArray(value))
        continue

      // An inconsistency was definitely found according to scheme
      console.error(`${key} is of type ${typeof value}, should be ${scheme[key]}`)
      return false
    }
  }

  // No errors until here, object is validated
  return true
}

module.exports = validateObject;

/**
 * Check whether the value is null
 * @param   {any} val to be validated
 * @returns {boolean} true/false
 */
const isNull = (val) => {
  return val === null;
};

/**
 * Check whether value is NaN
 * @param   {any} val to be validated
 * @returns {boolean} true/false
 */
const isNaN = (val) => {
  return Number.isNaN(Number(val));
};

/**
 * Check whether value is undefined
 * @param   {any} val to be validated
 * @returns {boolean} true/false
 */
const isUndefined = (val) => {
  return typeof val === 'undefined';
};

/**
 * Check whether value is null or undefined
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isMissing = (val) => {
  return isNull(val) || isUndefined(val);
};

/**
 * Check whether value is not null or not undefined
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isPresent = (val) => {
  return !isMissing(val);
};

/**
 * Check whether value 1 and value 2 are equal
 * @param  {any} val1 to be validated
 * @param  {any} val2 to be validated
 * @returns {boolean} true/false
 */
const isEqual = (val1, val2) => {
  return val1 === val2;
};

/**
 * Check whether value is an boolean
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isBoolean = (val) => {
  return isPresent(val) && typeof val === 'boolean';
};

/**
 * Check whether value is true
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isTrue = (val) => {
  return isBoolean(val) && val === true;
};

/**
 * Check whether value is false
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isFalse = (val) => {
  return isBoolean(val) && val === false;
};

/**
 * Check whether value is an string
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isString = (val) => {
  return isPresent(val) && typeof val === 'string';
};

/**
 * Check whether value is an string and has 0 characters
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isEmptyString = (val) => {
  return isString(val) && isEqual(val.length, 0);
};

/**
 * Check whether value is an string,and has at least 1 character
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isNonEmptyString = (val) => {
  return isString(val) && val.length > 0;
};

/**
 * Check whether value is an number
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isNumber = (val) => {
  return isPresent(val) && typeof val === 'number' && !isNaN(val);
};

/**
 * Check whether value is an number and integer
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isInteger = (val) => {
  return isNumber(val) && Number.isInteger(val);
};

/**
 * Check whether value is an number and greater than 0
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isPositiveInteger = (val) => {
  return isInteger(val) && val > 0;
};

/**
 * Check whether value is an number and smaller than 0
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isNegativeInteger = (val) => {
  return isInteger(val) && val < 0;
};

/**
 * Check whether value is an number and greater or equal to 0
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isNonNegativeInteger = (val) => {
  return isInteger(val) && val >= 0;
};

/**
 * Check whether value is an array
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isArray = (val) => {
  return isPresent(val) && Array.isArray(val);
};

/**
 * Check whether value is an array and has no elements
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isEmptyArray = (val) => {
  return isArray(val) && isEqual(val.length, 0);
};

/**
 * Check whether value is an array and has at least 1 element
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isNonEmptyArray = (val) => {
  return isArray(val) && val.length > 0;
};

/**
 * Check whether value is an array and its length is n
 * @param  {any} val to be validated
 * @param  {number} count to be validated
 * @returns {boolean} true/false
 */
const isHasItem = (val, count = 1) => {
  return isArray(val) && val.length === count;
};

/**
 * Check whether value is an array and its length is more than 1
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isHasMultipleItems = (val) => {
  return isArray(val) && val.length > 1;
};

/**
 * Check whether the value is in array
 * @param  {any} val to be validated
 * @param  {array} keys to be validated
 * @returns {boolean} true/false
 */
const isInArray = (val, keys) => {
  return isArray(keys) && isPresent(val) && keys.indexOf(val) !== -1;
};

/**
 * Check whether value is an object
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isObject = (val) => {
  return isPresent(val) && typeof val === 'object' && !isArray(val);
};

/**
 * Check whether value is an object and has no keys
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isEmptyObject = (val) => {
  if (isObject(val)) {
    const propertyNames = Object.getOwnPropertyNames(val);
    const propertySymbols = Object.getOwnPropertySymbols(val);
    const keysLength = propertyNames.length + propertySymbols.length;
    return isEqual(keysLength, 0);
  }
  return false;
};

/**
 * Check whether value is an object and has at least 1 keys
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isNonEmptyObject = (val) => {
  return !isEmptyObject(val);
};

/**
 * Check whether value is an object and has only the keys provided
 * @param {any} val to be validated
 * @param {any} keys to be matched
 * @returns {boolean} true/false
 */
const isHasOnlyKeys = (val, keys) => {
  if (isObject(val) && isArray(keys)) {
    const objKeys = Object.keys(val);
    const propertiesInKeys = keys.filter(key => key in val);
    return isEqual(propertiesInKeys.length, objKeys.length) && isEqual(objKeys.length, keys.length);
  }
  return false;
};

/**
 * Check whether value is an date
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isDate = (val) => {
  const date = new Date(val);
  return isPresent(val) && (!isNaN(date.valueOf()) || !isNaN(val) || val instanceof Date);
};

/**
 * Check whether value is an function
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isFunction = (val) => {
  return isPresent(val) && typeof val === 'function';
};

/**
 * Check whether value is an construct
 * @param  {any} val to be validated
 * @returns {boolean} true/false
 */
const isConstruct = (val) => {
  let result = isFunction(val);
  if (result) {
    try {
      const Val = val;
      // eslint-disable-next-line no-new
      new Val();
      result = true;
    } catch (err) {
      result = !isNonNegativeInteger(err.message.indexOf('is not a constructor'));
    }
  }
  return result;
};

module.exports = {
  isNull,
  isNaN,
  isUndefined,
  isMissing,
  isPresent,
  isEqual,
  isBoolean,
  isTrue,
  isFalse,
  isString,
  isEmptyString,
  isNonEmptyString,
  isNumber,
  isInteger,
  isPositiveInteger,
  isNegativeInteger,
  isNonNegativeInteger,
  isArray,
  isEmptyArray,
  isNonEmptyArray,
  isHasItem,
  isHasMultipleItems,
  isInArray,
  isObject,
  isEmptyObject,
  isNonEmptyObject,
  isHasOnlyKeys,
  isDate,
  isFunction,
  isConstruct
};

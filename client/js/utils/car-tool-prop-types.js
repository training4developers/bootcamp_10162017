
const isRequired = (validatorFn) => (...params) => {
  if (!params[0].hasOwnProperty(params[1])) {
    return Error(params[1] + ' is required');
  }
  return validatorFn(...params);
};

export const fieldNameAndValueType = fieldNamePropName => { 
  const validatorFn = (props, propName, componentName) => {
    if (['year','price'].includes(props[fieldNamePropName])) {
      if (typeof props[propName] !== 'number') {
        return Error(propName + ' should be a number');
      }
    } else {
      if (typeof props[propName] !== 'string') {
        return Error(propName + ' should be a string');
      }
    }
  };

  validatorFn.isRequired = isRequired(validatorFn);

  return validatorFn;

};
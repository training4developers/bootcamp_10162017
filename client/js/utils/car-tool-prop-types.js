export const fieldAndValue = (props, propName, componentName) => {
  if (['year','price'].includes(props.filterFieldName)) {
    if (typeof props[propName] !== 'number') {
      return Error(propName + ' should be a number');
    }
  } else {
    if (typeof props[propName] !== 'string') {
      return Error(propName + ' should be a string');
    }
  }

};
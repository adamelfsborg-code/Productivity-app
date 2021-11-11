const checkLength = (item, minLength) => {
  if (item instanceof Object) {
    return Object.keys(item).length >= minLength;
  }

  if (item instanceof Array || item instanceof String) {
    return item.length >= minLength;
  }

  if (item instanceof Number) {
    return item.toString().length >= minHeight;
  }

  return false
}

const checkUndefined = (item) => {
  return item === undefined || item === null;
}


module.exports = {
  checkLength,
  checkUndefined
}

exports.min = function min (array) {
  if (typeof array === 'undefined' || !array.length) {
    return 0
  }

  let min = array.reduce((min, currentElem) => {
    return currentElem < min ? currentElem : min;
  }, Number.POSITIVE_INFINITY);

  return min;
}

exports.max = function max (array) {
  if (typeof array === 'undefined' || !array.length) {
    return 0
  }

  let max = array.reduce((max, currentElem) => {
    return currentElem > max ? currentElem : max;
  }, Number.NEGATIVE_INFINITY);

  return max;
}

exports.avg = function avg (array) {
  if (typeof array === 'undefined' || !array.length) {
    return 0
  }

  let avg =  array.reduce((sum, currentElem) => {
    return sum + currentElem
  }, 0) / array.length;

  return avg;


  return avg;
}

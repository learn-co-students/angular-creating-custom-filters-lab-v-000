function upperFirstLetter() {
  return function (str) {
    return str.replace(/^[a-z]/, function (str) {
      return str.toUpperCase();
    })
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', upperFirstLetter);

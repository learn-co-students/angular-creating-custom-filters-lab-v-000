function upperFirstLetter() {
  return function (str) {
    return str[0].toUpperCase() + str.substring(1);
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', upperFirstLetter)

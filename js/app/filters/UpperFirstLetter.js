function UpperFirstLetter() {
  return function (str) {
    return str[0].toUpperCase() + str.slice(1, str.length);
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter)

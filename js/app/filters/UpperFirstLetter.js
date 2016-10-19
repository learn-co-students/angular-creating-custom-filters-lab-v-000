function upperFirstLetter() {
  return function(str) {
    var firstLetter = str[0].toUpperCase();
    return firstLetter + str.slice(1);
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', upperFirstLetter)
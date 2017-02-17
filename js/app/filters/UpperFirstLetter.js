function UpperFirstLetter() {
  return function(str) {
    var backString = str.substring(1, str.length)
    var capLetter = str[0].toUpperCase();
    return capLetter + backString;
  };
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter)

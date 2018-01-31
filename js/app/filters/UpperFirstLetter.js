function UpperFirstLetter() {
  return function(str) {
    return str.replace(str[0], str[0].toUpperCase());
  };
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter);
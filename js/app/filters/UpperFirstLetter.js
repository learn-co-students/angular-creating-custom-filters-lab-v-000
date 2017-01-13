function UpperFirstLetter() {
  return function(str) {
    // var firstLetter = str.slice(0, 1).toUpperCase();
    // var remainingLetters = str.slice(1);
    // return firstLetter + remainingLetters;
    return str[0].toUpperCase() + str.slice(1);
  };
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter);

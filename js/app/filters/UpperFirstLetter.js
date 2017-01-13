function upperFirstLetter() {
  return function(str) {
    var firstLetter = str.slice(0, 1).toUpperCase();
    var remainingLetters = str.slice(1);
    return firstLetter + remainingLetters;
  };
}

angular
  .module('app')
  .filter('upperFirstLetter', upperFirstLetter);

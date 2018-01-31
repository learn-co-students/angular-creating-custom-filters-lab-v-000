function UpperFirstLetter() {
  return function (input) {
    return input[0].toUpperCase() + input.slice(1);
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter);
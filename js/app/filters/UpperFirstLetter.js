function UpperFirstLetter() {
  return function (string) {
    return string[0].toUpperCase() + string.slice(1);
  };
}

angular
    .module('app')
    .filter('upperFirstLetter', UpperFirstLetter);

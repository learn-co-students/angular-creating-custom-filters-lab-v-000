function UpperFirstLetter() {
  return function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
}

angular
  .module('app')
  .filter("UpperFirstLetter", UpperFirstLetter);

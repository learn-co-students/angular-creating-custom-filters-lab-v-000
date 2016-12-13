function UpperFirstLetter() {
  return function (namePart) {
    return namePart[0].toUpperCase() + namePart.slice(1);
   }
}

angular
    .module('app')
    .filter('upperFirstLetter', UpperFirstLetter);

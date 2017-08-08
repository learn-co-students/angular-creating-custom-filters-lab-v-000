function UpperFirstLetter() {
    return function (string) {
      //returns capital first letter and then the rest of the string
          return string[0].toUpperCase() + string.slice(1);
    };
}

angular
    .module('app')
    .filter('upperFirstLetter', UpperFirstLetter);

function UpperFirstLetter() {
  return function(str) {
    return str.substring(0,1).toUpperCase()+str.substring(1);
  };
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter);

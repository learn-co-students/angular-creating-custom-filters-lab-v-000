function UpperFirstLetter(){
  return function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
}





angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter)
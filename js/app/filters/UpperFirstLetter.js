function UpperFirstLetter(){
  return function(string){
    return string.replace(string[0], string[0].toUpperCase());
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter)
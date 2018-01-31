function UpperFirstLetter(){
  return function(name){
    var letter = name[0].toUpperCase();
    return letter + name.substring(1);
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter);

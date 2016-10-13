function UpperFirstLetter(){
  return function(name){
    var chars = name.split('');
    chars[0] = chars[0].toUpperCase();

    return chars.join('');
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter);

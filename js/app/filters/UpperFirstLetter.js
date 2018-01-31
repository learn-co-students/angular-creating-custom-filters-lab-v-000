function UpperFirstLetter(){
  return function(word){
    return word[0].toUpperCase() + word.slice(1,word.length);
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter);
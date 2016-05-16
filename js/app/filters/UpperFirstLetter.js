function upperFirstLetter(){
  return function u(str){
     return str[0].toUpperCase() + str.slice(1);
  };
}

angular
  .module('app')
  .filter('upperFirstLetter', upperFirstLetter);
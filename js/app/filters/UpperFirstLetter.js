function upperFirstLetter (){
  return function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
}

angular 
  .module('app')
  .filter('upperFirstLetter', upperFirstLetter)
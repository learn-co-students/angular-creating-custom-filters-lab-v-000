function UpperFirstLetter() {
  return function (name){

    return name.substring(0,1).toUpperCase() + name.substring(1);
  }
  
}



angular
    .module('app')
    .filter('upperFirstLetter',UpperFirstLetter)

function UpperFirstLetter(){
  return function(str){
    cap_name = str.substr(0, 1).toUpperCase() + str.substr(1);
    return cap_name;
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter)
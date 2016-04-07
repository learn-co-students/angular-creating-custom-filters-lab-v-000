function upperFirstLetter(){
   return function(string){
       return string.substring(0,1).toUpperCase()+string.substring(1);
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', upperFirstLetter)

function UpperFirstLetter($filter) {
  return function (str) {
     return str.replace(/(\b\w)/gi,function(m){return m.toUpperCase();})
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter);

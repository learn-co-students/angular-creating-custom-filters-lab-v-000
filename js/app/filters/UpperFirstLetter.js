function UpperFirstLetter() {
  return function(string) {
    var stringArray = string.split('')
    var upCaseLetter = string.substring(0,1).toUpperCase()
    stringArray.splice(0, 1, upCaseLetter);
    var upCaseName = stringArray.join('');
    return upCaseName
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter)
function UpperFirstLetter() {
  return function(string) {
    var stringArray = string.split('')
    var firstLetter = stringArray[0]
    var upCaseLetter = firstLetter.toUpperCase()
    stringArray.splice(0, 1, upCaseLetter);
    var upCaseName = stringArray.join('');
    return upCaseName
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter)
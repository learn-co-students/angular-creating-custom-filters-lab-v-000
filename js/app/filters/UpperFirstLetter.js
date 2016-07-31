function UpperFirstLetter() {
  return function(str) {
    var strArray = str.split('');
    var firstLetter = strArray.shift();
    strArray.unshift(firstLetter.toUpperCase());
    var word = strArray.join('');

    return word;
  }
}
angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter);

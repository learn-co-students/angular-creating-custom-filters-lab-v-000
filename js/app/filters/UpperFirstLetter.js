function upperFirstLetter() {
  return function(name) {
    var newName = name.split('');
    var letter = newName.shift();
    newName.unshift(letter.toUpperCase());
    return newName.join('');

  }
}

angular
  .module('app')
  .filter('upperFirstLetter', upperFirstLetter)

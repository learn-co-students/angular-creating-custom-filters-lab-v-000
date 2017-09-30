function upperFirstLetter() {
  return function(firstName) {
    return firstName[0].toUpperCase() + firstName.slice(1);
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', upperFirstLetter)

function upperFirstLetter() {
  return function(str) {
    var cap = str.slice(0,1)
    return cap.toUpperCase() + str.slice(1)
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', upperFirstLetter)

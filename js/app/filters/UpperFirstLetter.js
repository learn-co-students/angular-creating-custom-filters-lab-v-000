function upperFirstLetter() {

  return function(str) {
    var a = str[0].toUpperCase()
    var string = str.slice(1)

    return a + string;
  }


}

angular
  .module('app')
  .filter('upperFirstLetter', upperFirstLetter)
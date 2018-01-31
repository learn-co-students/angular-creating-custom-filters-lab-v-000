function upperFirstLetter() {
  return function (str) {
      return str[0].toUpperCase()+str.substr(1);
  };
}

angular
    .module('app')
    .filter('upperFirstLetter', upperFirstLetter);

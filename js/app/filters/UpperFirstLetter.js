function upperFirstLetter() {
  return function (name) {
      return name.replace(name[0], name[0].toUpperCase());
    };
  }


angular
  .module('app')
  .filter('upperFirstLetter', upperFirstLetter)

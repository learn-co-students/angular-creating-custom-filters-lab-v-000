function upperFirstLetter() {
  return function (name) {
    return name[0].toUpperCase() + name.slice(1);
  };
}

angular
  .module('app')
  .filter('upperFirstLetter', upperFirstLetter);
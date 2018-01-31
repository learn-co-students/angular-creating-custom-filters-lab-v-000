function UpperFirstLetter() {
  return function (item) {
    return item[0].toUpperCase() + item.slice(1);
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter);

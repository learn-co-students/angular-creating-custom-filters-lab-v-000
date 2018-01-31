function makeUpperCase() {
  return function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
}

angular
  .module('app')
  .filter('makeUpperCase', makeUpperCase);
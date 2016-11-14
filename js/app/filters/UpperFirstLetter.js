function UpperFirstLetter() {
  return function(string) {
    return string.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter);
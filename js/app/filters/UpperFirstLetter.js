function UpperFirstLetter() {
  return function (name) {
    var name_arr = name.split('');
    name_arr[0] = name_arr[0].toUpperCase();
    return name_arr.join('');
  };
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter);
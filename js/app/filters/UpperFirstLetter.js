function upperFirstLetter() {
    return function (str) {
      var new_str = str[0].toUpperCase();
    
        return new_str + str.slice(1);
    };
}

angular
    .module('app')
    .filter('upperFirstLetter', upperFirstLetter);

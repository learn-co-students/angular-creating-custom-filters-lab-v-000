function upperFirstLetter() {
    return function (s) {
            return s.charAt(0).toUpperCase() + s.slice(1);
    }
}
 
angular
    .module('app')
    .filter('upperFirstLetter', upperFirstLetter);
function upperFirstLetter() {
    return function (name) {
        first = name[0].toUpperCase();
        rest = name.split('');
        rest.splice(0, 1)
        return first + rest.join('');
    };
}
 
angular
    .module('app')
    .filter('upperFirstLetter', upperFirstLetter);
function upperFirstLetter() {
    return function (str, active) {
        return str[0].toUpperCase() + str.slice(1);
    };
}

angular
    .module('app')
    .filter('upperFirstLetter', upperFirstLetter);

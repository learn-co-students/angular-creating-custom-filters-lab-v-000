function Upcase() {
    return function(str) {
        let arr = str.split('');
        arr[0] = arr[0].toUpperCase();
        return arr.join('');
    };

}
angular.module('app').filter('upperFirstLetter', Upcase);

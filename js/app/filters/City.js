function city() {
    return function (cities, name) {
        return cities.filter(function (city) {
            return city.location.city === name;
        });
    };
}
 
angular
    .module('app')
    .filter('city', city);
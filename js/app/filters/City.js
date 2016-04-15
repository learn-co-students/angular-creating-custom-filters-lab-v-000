function City() {
    return function (cities, city) {
        return cities.filter(function(element) {
        	return element.location.city === city
        });
    };
}

angular
			.module('app')
			.filter('city',City);
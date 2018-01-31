function city() {
	return function(cityList, city) {
		return cityList.filter(function(cityListItem) {
			return cityListItem.location.city === city;
		});
	}
}

angular
	.module('app')
	.filter('city', city);
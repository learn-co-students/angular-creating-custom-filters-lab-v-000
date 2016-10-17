function city() {
	return function(items, cityName) {
		return items.filter(function(item) {
			return item.location.city === cityName;
		});
	}
}

angular
	.module('app')
	.filter('city', city)
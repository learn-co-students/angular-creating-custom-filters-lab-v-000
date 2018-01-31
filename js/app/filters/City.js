function City() {
	return function(contactList, city) {

		if (city === '' || city === undefined) {

			return contactList;

		} else {

			var lowerCaseCity = city.toLowerCase();

			return contactList.filter(function(contact) {
				return contact.location.city === lowerCaseCity;
			});

		}
	};
}

angular
	.module('app')
	.filter('city', City);
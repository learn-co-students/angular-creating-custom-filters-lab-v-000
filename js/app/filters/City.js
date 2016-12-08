function City() {
	return function(contactList, city) {
		return contactList.filter(function(contact) {
			return contact.location.city === city;
		});
	};
}

angular
	.module('app')
	.filter('city', City);
function City() {
  return function(contacts, cityName) {
    return contacts.filter(function(contact) {
      return contact.location.city === cityName;
    });
  }
}

angular
  .module('app')
  .filter('city', City);
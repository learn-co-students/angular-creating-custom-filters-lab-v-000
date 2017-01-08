function city() {
  return function(contacts, passedCity) {
    return contacts.filter(function(contact) {
      return contact.location.city === passedCity;
    });
  };
}

angular
  .module('app')
  .filter('city', city)

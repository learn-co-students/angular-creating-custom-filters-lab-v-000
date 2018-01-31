function city() {
  return function (contacts, searchCity) {
    return contacts.filter(function(contact) {
      if (contact.location.city === searchCity) {
        return contact.name;
      };
    });
  }
}

angular
  .module('app')
  .filter('city', city);

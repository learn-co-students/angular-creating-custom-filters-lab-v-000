function City() {
  return function (contacts, searchCity) {
        return contacts.filter(function(contact) {
          return contact.location.city == searchCity;
        });
  }
}

angular
  .module('app')
  .filter('city', City);

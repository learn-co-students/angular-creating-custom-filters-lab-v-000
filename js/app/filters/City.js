function City() {
  return function (contacts, city) {
    return contacts.filter(function(contact) {
      return city === contact.location.city;
    });
  }
}

angular
      .module('app')
      .filter('city', City);

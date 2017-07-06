function city() {
  return function (contacts, city) {
    return contacts.filter(function (contact) {
      debugger;
      return contact.location.city === city;
    });
  };
}

angular
  .module('app')
  .filter('city', city)

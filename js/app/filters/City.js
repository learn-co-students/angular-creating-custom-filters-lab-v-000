function City() {
  return function(contacts, search) {
    return contacts.filter(function(person) {
      return person.location.city === search;
    })
  }
}

angular
  .module('app')
  .filter('city', City)
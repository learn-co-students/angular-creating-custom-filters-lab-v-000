function city() {
  return function(contacts, city) {
    return contacts.filter(function(contact){
      return contact.location.city === city;
    });
  }
}

angular
  .module('app')
  .filter('city', city);

// Create a custom filter to change the first letter
// of the word to be in uppercase, and apply this to the
// persons names.

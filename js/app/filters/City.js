function City() {
  return function(contacts, name) {
    return contacts.filter(function(contact) {
        if (contact.location.city == name) {
          console.log(contact);
          return contact;
        }
      });

  };
}

angular
  .module('app')
  .filter('city', City);

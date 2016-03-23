function City() {
  return function(contacts, city){
    var newContacts = [];
    contacts.forEach(function(contact){
        if(contact['location']['city']===city){
          newContacts.push(contact);
        }
    });
    return newContacts;
  }
}

angular.module('app').filter('city', City)
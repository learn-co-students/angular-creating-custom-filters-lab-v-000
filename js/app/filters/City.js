function City(){
  return function(contacts, city){
    return contacts.filter(function(contact){
      return contact['location']['city'] === city;
    });
  }

}

angular
  .module('app')
  .filter('city', City)
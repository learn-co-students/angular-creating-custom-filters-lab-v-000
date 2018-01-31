function City(){
  return function(contacts,city){
    return contacts.filter(function(contact){
      debugger;
      if (contact["location"]["city"] === city){
        return contact;
      }
    });
  }
}

angular
  .module('app')
  .filter('city', City);
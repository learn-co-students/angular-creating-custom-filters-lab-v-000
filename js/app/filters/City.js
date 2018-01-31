function City(){
  return function(contacts, cityname){

    return contacts.filter(function (contact){
      return contact.location.city === cityname;
    });
  }
}

angular
  .module('app')
  .filter('city', City);
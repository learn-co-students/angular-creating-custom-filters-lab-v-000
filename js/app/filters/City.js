function City(){
  return function(contact, cityName){
    if (contact.location.city == cityName){
      return contact;
    };
  };
}

angular
  .module('app')
  .filter('city', City);

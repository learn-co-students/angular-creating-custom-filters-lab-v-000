angular
  .module('app')
  .filter('city', function (){
  return function(contacts, city){
    return contacts.filter(function(contact){
      return contact.location.city === city;
    })
  }
});

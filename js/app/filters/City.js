function city(){
  return function(items, city){
    return items.filter(function(contact){
      return contact.location.city === city;
    });
  }
}

angular
  .module('app')
  .filter('city', city)

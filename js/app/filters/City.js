function City(){
  return function(contacts, city){
    return contacts.filter(function(item){
      return item.location.city === city;
    })
  }
}

angular
  .module('app')
  .filter('city', City)
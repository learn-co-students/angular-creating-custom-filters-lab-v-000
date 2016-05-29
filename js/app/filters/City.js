function City(){
  return function(collection, city){
    return collection.filter(function(item){
      return item.location.city === city;
    });
  }
}

angular
  .module('app')
  .filter('city', City);

angular.module('app')
  .filter('city', City);

  function City(){
    return function(items, city){
      return items.filter(function(item){
        return item.location.city === city;
      });
    }
  }
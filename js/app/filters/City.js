function City(){
   return function (items, entry){
    return items.filter(function (item){
      return item.location.city === entry;
    })
   }
 }



 angular
     .module('app')
     .filter('city',City)
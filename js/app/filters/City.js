function City(){
  return function(array, input){
    return array.filter(function(item){
      return item.location.city === input;
    });
  }
}

angular
  .module('app')
  .filter('city', City)
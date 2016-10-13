function City(){
  return function(data, city){
    var filtered = [];

    data.forEach(function(obj, i){
      if(obj['location']['city'] == city){
        filtered.push(obj);
      }
    });

    return filtered;
  }
}

angular
  .module('app')
  .filter('city', City);

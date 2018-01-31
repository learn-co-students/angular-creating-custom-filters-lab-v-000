function City(){
  return function(data, cityName){
    return data.filter(function(datum){
      return datum.location.city === cityName;
    });
  }
}

angular
  .module('app')
  .filter('city', City);
function City(){
  return function(ary, city){
    return ary.filter(function(d){
      return d.location.city === city;
    });
  };
}

angular
    .module('app')
    .filter('city', City);

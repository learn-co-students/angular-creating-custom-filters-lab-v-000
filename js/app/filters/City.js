function City() {
  return function(cities, city) {
    return cities.filter(function (c) {
      return c.location.city === city
    });
  };
}

angular 
  .module('app')
  .filter('city', City);

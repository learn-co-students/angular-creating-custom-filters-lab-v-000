function City() {
  return function(cities, city) {
    return cities.filter(function(name) {
      return name.location.city === city;
    });
  }
}

angular
  .module('app')
  .filter('city', City);

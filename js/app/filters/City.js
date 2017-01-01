function City() {
  return function(cities, cityname) {
    return cities.filter(function(city) {
      return city.location.city === cityname
    })
  }
}

angular
  .module('app')
  .filter('city', City)

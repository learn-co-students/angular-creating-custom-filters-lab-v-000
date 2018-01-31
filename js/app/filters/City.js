function city() {
  return function (cities, city) {
    return cities.filter(function (place) {
      return place.location.city === city;
    })
  }
}

angular.module('app').filter('city', city);

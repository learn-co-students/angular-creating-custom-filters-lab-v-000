function City() {
  return function (collection, targetCity) {
    return collection.filter(function (obj) {
        return obj.location.city === targetCity;
    });
  }
}

angular
    .module('app')
    .filter('city', City);

function City() {
  return function (list, city) {
    return list.filter(function(x) {
      if (x.location.city == city) {
        return x;
      }
    });
  };
}

angular
  .module('app')
  .filter('city', City);


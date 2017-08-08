function City() {
  return function(list, city) {
    // list = ctrl.contacts

    return list.filter(function(item) {
        return item.location.city === city;
    });
  };
}

angular
  .module('app')
  .filter('city', City);

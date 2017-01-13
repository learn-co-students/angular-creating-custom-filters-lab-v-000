function city() {
  return function(items, city) {
    // items = ctrl.contacts

    return items.filter(function(item) {
        return item.location.city === city;
    });
  };
}

angular
  .module('app')
  .filter('city', city);

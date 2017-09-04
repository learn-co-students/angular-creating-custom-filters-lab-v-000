function City() {
  return function (items, name) {
      return items.filter(function (item) {
          return item.location.city === name;
      });
  };
}

angular
    .module('app')
    .filter('city', City);

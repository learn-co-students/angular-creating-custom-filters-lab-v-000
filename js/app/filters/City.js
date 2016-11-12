function City() {
    return function (lists, city) {

      return lists.filter(function (item) {
        return item.location.city === city;
      });

    };
}

angular
    .module('app')
    .filter('city', City);

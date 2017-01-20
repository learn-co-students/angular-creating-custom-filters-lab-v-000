function city() {
  return function (list, city) {
    return list.filter((item) => item.location.city === city);
  }
}

angular
  .module('app')
  .filter('city', city)
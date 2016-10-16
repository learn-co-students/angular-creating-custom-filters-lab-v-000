function city() {
  return function (items, city) {
    return items.filter(function (item) {
      return item.location.city === city;
    })
  };  
}

angular
  .module('app')
  .filter('city', city);
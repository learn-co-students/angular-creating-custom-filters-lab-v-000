function city() {
    return function(array, city){
      return array.filter(function(index) {
      return index.location.city === city
    })
  }
}

angular
  .module('app')
  .filter('city', city)

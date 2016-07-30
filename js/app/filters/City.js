function City() {
  return function(array, city){
    array.forEach(function(index) {
      return index.location.city === city
    })
  }
}

angular
  .module('app')
  .filter('City', City)

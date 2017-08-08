function CityFilter() {
  return function(cityArr, searchTerm) {
    return cityArr.filter(function(cityArrInst){
      return cityArrInst.location.city.includes(searchTerm)
    })
  };
}

angular
  .module('app')
  .filter('city', CityFilter)

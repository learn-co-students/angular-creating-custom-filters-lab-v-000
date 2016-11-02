function City(){
  return function (arr, city) {
    return arr.filter(function (ele){
      return ele.location.city === city;
    });
  }
}

angular
  .module('app')
  .filter('city', City);

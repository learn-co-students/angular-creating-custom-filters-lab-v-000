function city(){
  return function(array, cityname){
    return array.filter(function(item){
      return item.location.city === cityname;
    });
  };
}

angular
  .module('app')
  .filter('city', city);
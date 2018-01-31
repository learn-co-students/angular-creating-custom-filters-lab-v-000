function city (){
  return function(list, letter){
    return list.filter(function (city) {
      debugger;
          return city.location.city === letter;
      });
  }
}

angular
  .module('app')
  .filter('city', city)

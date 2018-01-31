function City(){
  return function(data, city){
    // console.log(city);
    return data.filter(function(person){
      return person.location.city === city;
    })
  }
}

angular
  .module('app')
  .filter('city', City)

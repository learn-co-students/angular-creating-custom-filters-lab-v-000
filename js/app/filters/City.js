function City(){
  return function (people, city){
    if (!city) {
      return people;
    } else{
      return people.filter(function(person){
        return person.location.city === city;
      });
    }
  };
}

angular
  .module('app')
  .filter('city', City)
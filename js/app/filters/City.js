function City () {
  return function(people, city) {
    return people.filter(function(person){
      return person.location.city === city;
    });
  };
}
angular.module('app').filter('city', City);

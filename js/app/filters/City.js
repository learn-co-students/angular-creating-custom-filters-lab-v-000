function City() {
    return function(persons, city) {
       return persons.filter(function(person) {
          return person.location.city === city;
      });
    }
}

angular
    .module('app')
    .filter('city', City);

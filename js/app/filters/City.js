function city(){
  return function(persons, cityQuery){
    if(cityQuery!==undefined && cityQuery.length > 0){
      return persons.filter(function(person){
        if(person.location.city.indexOf(cityQuery) !== -1){return true}
      });
    } else {
      return persons;
    }

  };
}

angular
    .module('app')
    .filter('city', city);

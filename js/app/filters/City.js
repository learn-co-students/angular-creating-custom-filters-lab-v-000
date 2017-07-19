function city() {
  return function (people, town) {
    return people.filter(function (person) {
      return person.location.city === town;
    })
  }
}

angular
    .module('app')
    .filter('city', city);

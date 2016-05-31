function City () {
  return function (group, city) {
    return group.filter(function (contact) {
      return contact.location.city === city;
    });
  }
}

angular
  .module('app')
  .filter('city', City)

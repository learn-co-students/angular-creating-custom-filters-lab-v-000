function city() {
    return function (contacts, input) {
      var result = [];
      for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].location.city == input) {
          result.push(contacts[i]);
        }
      }
      return result;
    };
}
 
angular
    .module('app')
    .filter('city', city);
function City() {
  return function(contacts, city) {
    //using Array.prototype.filter syntax
    return contacts.filter(function(contact) {
       return contact.location.city === city;
    });
    
    //using vanilla JS array iterator syntax
      // var filtered = [];
      // for (var i = 0; i < contacts.length; i++) {
      //   if (contacts[i].location.city === city) {
      //     filtered.push(contacts[i]);
      //   };
      // }
      // return filtered
    
  };
}

angular
  .module('app')
  .filter('city', City);
function UpperFirstLetter () {
  return function (contact){
    return contact[0].toUpperCase() + contact.slice(1);
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter);

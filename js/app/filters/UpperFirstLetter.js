function upperFirstLetter(){
  return function(name) {
      return name[0].toUpperCase() + name.slice(1);
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', upperFirstLetter);

// Create a custom filter to change the first letter of the word to be in
//  uppercase, and apply this to the persons names.

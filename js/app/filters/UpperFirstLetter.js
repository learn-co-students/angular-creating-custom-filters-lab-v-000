angular
  .module('app')
  .filter('upperFirstLetter', function(){
    return function(str) {
      return str.replace(/[^-'\s]+/g, function(word) {
        return word.replace(/^./, function(first) {
          return first.toUpperCase();
        });
      });
    };
  })
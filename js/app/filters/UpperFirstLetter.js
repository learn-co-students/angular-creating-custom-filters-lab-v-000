var app = angular.module('app')
  app.filter('upperFirstLetter', function(){
      return function(name, item){
        return name.replace(name[0], name[0].toUpperCase());
      };
  })

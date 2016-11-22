function UpperFirstLetter() {
    return function (name) {
      return name = name.replace(name.split("")[0], name.split('')[0].toUpperCase());
  };
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter);

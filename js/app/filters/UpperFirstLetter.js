function upperFirstLetter() {
  return function (word) {
    return word.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };
}


angular
  .module("app")
  .filter("upperFirstLetter", upperFirstLetter)

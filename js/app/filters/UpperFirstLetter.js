function UpperFirstLetter(){
  return function(data){
    var remainder = data[0].toUpperCase();
    for(i = 1; i < data.length; i++){
      remainder += data[i];
    }
    return remainder;
  };
}

angular
  .module('app')
  .filter('upperFirstLetter', UpperFirstLetter)

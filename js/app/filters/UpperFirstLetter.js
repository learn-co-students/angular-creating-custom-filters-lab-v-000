function upperFirstLetter() {
  return function (word) {
    // \b matches the beginning or ending of word (word boundary)
    // \w matches meta-characters [a-zA-Z0-9]
    return word.replace(/\b\w/g, l => l.toUpperCase())
  }
}

angular
  .module('app')
  .filter('upperFirstLetter', upperFirstLetter)
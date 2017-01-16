angular.module('app')
  .filter('upperFirstLetter', () => {
    return string => {
      const firstChar = string[0]
      return string.replace(
        firstChar,
        firstChar.toUpperCase()
      )
    }
  })

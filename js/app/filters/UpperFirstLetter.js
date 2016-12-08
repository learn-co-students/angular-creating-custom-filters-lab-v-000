function UpperFirstLetter() {

	return function(string) {
		return string.replace(/\b\w/g, function(firstLetterOfWord) {
			return firstLetterOfWord.toUpperCase();
		});
	};

}

angular
	.module('app')
	.filter('upperFirstLetter', UpperFirstLetter);
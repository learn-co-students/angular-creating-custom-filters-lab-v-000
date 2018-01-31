function upperFirstLetter() {
	return function(word) {
		return word[0].toUpperCase() + word.slice(1);
	}
}

angular
	.module('app')
	.filter('upperFirstLetter', upperFirstLetter);
function City() {
    return function (items, city) {
        // items = ctrl.albums (an array of albums)
        // letter = 'a'

        return items.filter(function (item) {
            return item.location.city === city;
        });
    };
}

angular
    .module('app')
    .filter('city', City);

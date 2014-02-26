

angular.module('Mukijs').

filter('slice', function () {
    return function (arr, start, end) {
        return arr.slice(start, end);
    };
}).

filter('ten', function () {
    return function (arr, start, end) {
        var ten = [];
        arr.forEach(function (num, index) {
            if (index % 10 === 0 ) ten.push(index/10);
        });
        return ten;
    };
});

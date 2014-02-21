

angular.module('Mukijs').

filter('slice', function () {
    return function (arr, start, end) {
        console.log('start:', start, ', end', end);
        return arr.slice(start, end);
    };
}).

filter('range', function () {
    return function (arr, range) {
        var _newArr = [];
        arr.forEach(function (num, index) {
            if (index % 10 === 0 ) _newArr.push(index/10);
        });
        return _newArr;
    };
});

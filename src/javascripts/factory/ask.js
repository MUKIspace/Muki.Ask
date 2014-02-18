'use strict';

angular.module('Mukijs').

factory('Ask', function(
    $q,
    $http
){

    function get () {
        return $http.get('./../data/data.ask.json');
    }

    return {
        get: get
    };

});

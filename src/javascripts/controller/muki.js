
angular.module('Mukijs').

controller('MukiCtrl', function(
    $scope,
    Ask
){
    //
    $scope.q = [];
    $scope.qlength = 0;

    console.log('ng run');

    Ask.get().then(function (results) {
        $scope.q        = results.data;
        $scope.qlength  = results.data.length;
    });

});

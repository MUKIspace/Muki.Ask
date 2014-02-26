
angular.module('Mukijs').

controller('MukiCtrl', function(
    $scope,
    Ask
){
    //
    $scope.q = [];
    $scope.qlength = 0;
    $scope.qPage = 1;
    $scope.pageItems = 10;

    console.log('ng run');

    $scope.uPage = function updatePage(index) {
        $scope.qPage = index + 1;
    }

    Ask.get().then(function (results) {
        $scope.q        = results.data;
        $scope.qlength  = results.data.length;
    });

});

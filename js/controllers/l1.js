var app=angular.module('app',[]);
app.controller('mainController', ['$scope', function ($scope){
  $scope.num=['9','3','6'];
  $scope.i;
  $scope.j;
  $scope.au;
  $scope.n=3;

  $scope.ordenar=function(){
    for($scope.i=0;$scope.i<=$scope.n;$scope.i++){
      for($scope.j=0;$scope.j<$scope.n-1;$scope.j++){
        if($scope.num[$scope.j]>$scope.num[$scope.j+1]){
          $scope.au=$scope.num[$scope.j];
          $scope.num[$scope.j]=$scope.num[$scope.j+1];
          $scope.num[$scope.j+1]=$scope.au;
        }
      }
    }
  }

}]);

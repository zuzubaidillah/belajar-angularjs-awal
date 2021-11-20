var app = angular.module('xapp', []);

app.controller('xctrl', function ($scope) {
  $scope.operation = "Operasi apa?";
  $scope.hasil = 0;
  $scope.operate = function (code) {
    var obj1 = +$scope.obj1;
    var obj2 = +$scope.obj2;
    switch (code) {
      case 1:
        $scope.operation = "Tambah";
        $scope.hasil = obj1 + obj2;
        break;
      case 2:
        $scope.operation = "Kurangi";
        $scope.hasil = obj1 - obj2;
        break;
      case 3:
        $scope.operation = "Kali";
        $scope.hasil = obj1 * obj2;
        break;
      case 4:
        $scope.operation = "Bagi";
        $scope.hasil = obj1 / obj2;
        break;
    }
  }
});
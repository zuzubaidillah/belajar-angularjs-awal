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

  // tabel siswa

  $scope.siswa = [{
    nomor: 1,
    nama: "kamu",
    kelas: 1,
    sekor: 200
  },{
    nomor: 2,
    nama: "saya",
    kelas: 1,
    sekor: 200
  },{
    nomor: 3,
    nama: "iya",
    kelas: 1,
    sekor: 200
  },{
    nomor: 4,
    nama: "opo",
    kelas: 1,
    sekor: 200
  },{
    nomor: 5,
    nama: "okeeeh siap",
    kelas: 1,
    sekor: 200
  }];

  // order by
  // $scope.ord = function (key) {
  //   $scope.console.log(key);
  // }
  $scope.ordering = function (ordvar, by) {
    ordvar = !ordvar;
    $scope.ordstatus = ordvar;
    $scope.ord = by;
    return ordvar;
  }

});
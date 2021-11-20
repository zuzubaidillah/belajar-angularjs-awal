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


  // order by
  // $scope.ord = function (key) {
  //   $scope.console.log(key);
  // }
  $scope.paging = function (type) {
    if (type == 0 && $scope.currentpage > 0) {
      --$scope.currentpage;
    }else if (type == 1 && $scope.currentpage < $scope.pagenumber - 1) {
      ++$scope.currentpage;
    }
  }

  $scope.$watchCollection('siswa', function () {
    if ($scope.siswa == undefined) return;
    $scope.currentpage = 0;
    $scope.pagenumber = Math.ceil($scope.siswa.length / $scope.pagesize)
  });

  $scope.changeAction = function (){
    $scope.currentpage = 0;
    $scope.pagenumber = Math.ceil($scope.siswa.length / $scope.pagesize)
  }
  $scope.ordering = function (ordvar, by) {
    ordvar = !ordvar;
    $scope.ordstatus = ordvar;
    $scope.ord = by;
    return ordvar;
  }
  $scope.siswa = siswa;
  $scope.pagesizes = [5,10,15,20];
  $scope.pagesize = $scope.pagesizes[0];
  $scope.currentpage = 0;
  $scope.pagenumber = Math.ceil($scope.siswa.length / $scope.pagesize);

});

var siswa = [{
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
},{
  nomor: 6,
  nama: "kamu",
  kelas: 1,
  sekor: 200
},{
  nomor: 7,
  nama: "111",
  kelas: 1,
  sekor: 200
},{
  nomor: 8,
  nama: "222",
  kelas: 1,
  sekor: 200
},{
  nomor: 9,
  nama: "332",
  kelas: 1,
  sekor: 200
},{
  nomor: 10,
  nama: "sdfsfsdf siap",
  kelas: 1,
  sekor: 200
},{
  nomor: 11,
  nama: "kamdsfgdfsgu",
  kelas: 1,
  sekor: 200
},{
  nomor: 12,
  nama: "sasdfgdfgya",
  kelas: 1,
  sekor: 200
},{
  nomor: 13,
  nama: "iydsfgdsa",
  kelas: 1,
  sekor: 200
},{
  nomor: 14,
  nama: "osdfgpo",
  kelas: 1,
  sekor: 200
},{
  nomor: 15,
  nama: "okesdfeeh siap",
  kelas: 1,
  sekor: 200
},{
  nomor: 16,
  nama: "kasdfgdsmu",
  kelas: 1,
  sekor: 200
},{
  nomor: 17,
  nama: "saysdfgdfga",
  kelas: 1,
  sekor: 200
},{
  nomor: 18,
  nama: "isdfgdfsgya",
  kelas: 1,
  sekor: 200
},{
  nomor: 19,
  nama: "opsdfgo",
  kelas: 1,
  sekor: 200
},{
  nomor: 20,
  nama: "okeeeh sdfgdfgsiap",
  kelas: 1,
  sekor: 200
},{
  nomor: 21,
  nama: "kafdgdsmu",
  kelas: 1,
  sekor: 200
},{
  nomor: 22,
  nama: "sasdfgdfgya",
  kelas: 1,
  sekor: 200
},{
  nomor: 23,
  nama: "iysfgdfa",
  kelas: 1,
  sekor: 200
},{
  nomor: 24,
  nama: "opsdfgdfgo",
  kelas: 1,
  sekor: 200
},{
  nomor: 25,
  nama: "okesfgdsfeeh siap",
  kelas: 1,
  sekor: 200
},{
  nomor: 26,
  nama: "kasdfgdfgmu",
  kelas: 1,
  sekor: 200
},{
  nomor: 27,
  nama: "saydfsgdfga",
  kelas: 1,
  sekor: 200
},{
  nomor: 28,
  nama: "iyasdfgdsfg",
  kelas: 1,
  sekor: 200
},{
  nomor: 29,
  nama: "opsdfgsdfo",
  kelas: 1,
  sekor: 200
},{
  nomor: 30,
  nama: "okeeeh siap",
  kelas: 1,
  sekor: 200
}];


var paintApp = angular.module('paintApp', []);

paintApp.controller('paintCtrl', function($scope, $http){

  $scope.url = '/api/users';

  $scope.fetch = function(){
    $http.get($scope.url).success(function(data){
      $scope.data = data;
    });
  };

  $scope.create = function(username, email, password, canvas) {

    getCanvas = function(){
    var canvas = document.getElementById("myCanvas");
    console.log(canvas);
    context = canvas.getContext('2d');
    dataURL = canvas.toDataURL("image/png");
    console.log(dataURL);
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    return image.src;
   }

    $scope.canvas = getCanvas();

    $http.post($scope.url, {username: username, email: email, password: password, canvas: $scope.canvas}).success(function(data, status){

        console.log(data);

        return status;


    });


  };


$scope.fetch();

})

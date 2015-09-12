

var paintApp = angular.module('paintApp', []);

paintApp.controller('paintCtrl', function($scope, $http){

  $scope.url = '/api/users';

  $scope.fetch = function(){
    $http.get($scope.url).success(function(data){
      $scope.data = data;
    });
  };

  $scope.create = function(username, email, password, canvas) {
    $http.post($scope.url, {username: username, email: email, password: password, canvas: canvas}).success(function(data, status){


      var canvas = document.getElementById("myCanvas");
      console.log(canvas);
      context = canvas.getContext('2d');
      dataURL = canvas.toDataURL("image/png");
      console.log(dataURL);
      var image = new Image();
      image.src = canvas.toDataURL("image/png");



      $scope.fetch();
    });
    
  };






$scope.fetch();

})

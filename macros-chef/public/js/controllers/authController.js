app.controller('authController', function($scope){
  
  $scope.user = {username: '', password: ''};
  $scope.error_message = '';

  postService.getAll().success(function(data){
    $scope.posts = data; 
  });

  $scope.login = function(){
    //placeholder until authentication is implemented
    $scope.error_message = 'login request for ' + $scope.user.username;
  };

  $scope.register = function(){
    //placeholder until authentication is implemented
    $scope.error_message = 'registeration request for ' + $scope.user.username;
  };
});


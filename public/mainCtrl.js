angular.module('climbApp').controller('mainCtrl', function ($scope, mainService) {


  // TEST //
  $scope.getSomething = function () {
    mainService.getTest().then(function (responseFromService) {
      console.log('response', responseFromService);
    })
  };

  $scope.getSomething();

  // END TEST //

  // GET ALL USERS FROM DB //
  $scope.getAllUsers = function () {
    mainService.getAllUsers().then(function (response) {
      console.log('response', response);
      $scope.users = response.reverse();
    })
  };

  $scope.getAllUsers();

  // END GET USERS FROM DB //


  // CREATE NEW USER //
  $scope.submitNewUser = function () {

    var newUser = {
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      email: $scope.email
    };

    mainService.createNewUser(newUser).then(function (response) {
      console.log('response', response);
      $scope.firstName = '';
      $scope.lastName  = '';
      $scope.email     = '';

      $scope.getAllUsers();

    })
  };
  // END CREATE NEW USER //


});
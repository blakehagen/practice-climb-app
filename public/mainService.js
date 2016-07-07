angular.module('climbApp').service('mainService', function ($http) {

  this.getTest = function () {
    return $http({
      method: 'GET',
      url: '/api/test'
    }).then(function (dataFromServer) {
      return dataFromServer;
    })
  };

  this.createNewUser = function (newUser) {
    return $http({
      method: 'POST',
      url: '/api/user',
      data: newUser
    }).then(function (response) {
      return response;
    })
  };

  this.getAllUsers = function () {
    return $http({
      method: 'GET',
      url: '/api/users'
    }).then(function (response) {
      return response.data;
    })
  };


});
// on déclare un module 'schoolApp' grâce à la fonction angular.module
var schoolApp = angular.module('schoolApp',[]);
// on déclare le controller 'studentsCtrl' qu'on rattache au module
// $scope est un paramètre du controller qui permet le data binding (synchronisation entre JS et HTML)
schoolApp.controller('studentsCtrl',function($scope){
  // on appelle notre variable grâce au $scope
  $scope.firstName = 'Émilie';
  $scope.lastName = 'Gérard';
  $scope.age = '17';
  $scope.grade = 'Terminale';
});

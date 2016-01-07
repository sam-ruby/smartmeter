// JavaScript Document
angular.module('energyApp.controllers', [])

.controller('EnergyCtrl', function($scope, $ionicModal, $ionicSideMenuDelegate) { 
  
	$scope.toggleRight = function() {
		$ionicSideMenuDelegate.toggleRight();
	};
	
	// Create our modal
	// Create the login modal that we will use later
	$ionicModal.fromTemplateUrl('my-account.html', function(modal) {
		$scope.AccModal = modal;
	}, {
		scope: $scope
	});
	
	// Triggered in the modal to close it
	$scope.closeAccount = function() {
		$scope.AccModal.hide();
	};
	
	// Open the account modal
	$scope.openAccount = function() {
		$scope.AccModal.show();
	};
	
})

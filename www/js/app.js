angular.module('energyApp', ['ionic', 'energyApp.controllers', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html"
    })
    .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html"
        }
      }
    })
    .state('app.nest', {
      url: "/nest",
      views: {
        'menuContent' :{
          templateUrl: "templates/nest.html"
        }
      }
    })
    .state('app.leaf', {
      url: "/leaf",
      views: {
        'menuContent' :{
          templateUrl: "templates/leaf.html"
        }
      }
    })
  
  $urlRouterProvider.otherwise("/app/home");
})


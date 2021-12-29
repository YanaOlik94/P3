var myApp = angular.module('uiRouter', ['ui.router']);
// run(function($rootScope, $state) {
// $rootScope.$state = $state;
// });

myApp.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
  .state("home", {
    url:"/home",
    templateUrl: "home.html",
    controller: "homeCtrl",
    })
  .state("about", {
    url:"/about",
    templateUrl: "about.html",
    controller: "aboutCtrl",
    })
  .state("about-contact", {
    url: "/about/contact",
    templateUrl: "contact.html",
    });

  
}
  
]);


myApp.controller('homeCtrl', function($scope, $state) {
  console.log('I am a home controller');
});


myApp.controller('aboutCtrl', function($scope, $state) {
  console.log("I am about controller");

  $scope.goToContact = function() {
    console.log('Profile');
    $state.go('about-contact');

  };
  

});
define([
  "angular",  
  "angular-ui-router",   
  "pages/home/home-router", //rota da pagina do front
  "directives/first/first-directive",   // importa diretiva  
], function (
  angular,  
  angularUiRoute,  
  homeState,
  firstDirective,    
) {
  var app = angular.module("movit", ["ui.router"]).config([
    "$stateProvider",
    function ($stateProvider) {
      $stateProvider.state(homeState); //essa linha configura as rotas do front-end
    },
  ]);

  app.directive("firstDirective", firstDirective);  

  angular.bootstrap(document, ["movit"]);
});

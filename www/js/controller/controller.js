// This is a JavaScript file

ons.bootstrap()
  .controller('AppController', function($scope) {
    this.load = function(page) {
      $scope.splitter.content.load(page);
      $scope.splitter.left.close();
    };

    this.toggle = function() {
      $scope.splitter.left.toggle();
    };
  });

ons.ready(function() {
    console.log("Onsen UI is ready!");
});
 
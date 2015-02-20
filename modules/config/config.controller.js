angular.module('app')
    .controller('config', ['$scope', '$rootScope', 'localStorageService', function ($scope, $rootScope, localStorageService) {

    $rootScope.data = {
        theme: ''
    };

     if (localStorageService.isSupported) {
          $rootScope.data.theme = localStorageService.get('theme');
        }
     else {
            $scope.theme = 'bootstrap';
        }

    $scope.bootstraps = [
        { name: 'bootstrap', url: 'bootstrap' },
        { name: 'dark', url: 'dark' }
    ];

    $scope.$watch('data.theme', function () {
        if ($rootScope.data.theme !== null ) {
            localStorageService.add('theme', $rootScope.data.theme);
        }
    });


}]);



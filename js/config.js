app
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('/', {
            url: '/',
            views: {
                'main-view': {
                    templateUrl: 'templates/form.html',
                    controller: 'formCtrl'
                }
            }
        });
    $urlRouterProvider.otherwise('/');
})
;
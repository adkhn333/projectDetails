app
.service('ProjectStatus', function($rootScope) {
    var Obj = {
        model: {
            underConstruction: '',
            readyToMove: ''
        },
        SaveState: function() {
            sessionStorage.ProjectStatus = angular.toJson(service.model);
        },
        RestoreState: function() {
            Obj.model = angular.fromJson(sessionStorage.ProjectStatus);
        }
    }
    $rootScope.$on('savestate', Obj.SaveState);
    $rootScope.$on('restorestate', Obj.RestoreState);
    return Obj;
})
;
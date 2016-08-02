app
.controller('formCtrl', function($scope) {
    var cityID = '1234';
    var projectID = 'pID';
    var version = '1-2';
    $scope.showing = false;
    $scope.secShowing = false;
    $scope.isSearched = false;
    $scope.version = version;
    $scope.projectObj = {};
    database.ref('protectedResidential/'+cityID+'/projects/').on('value', function(snapshot) {
        console.log(snapshot.val());
        $scope.projects = snapshot.val();
    });
    $scope.fillDetails = function(id) {
        $scope.isSearched = true;
        console.log(id);
        database.ref('protectedResidential/'+cityID+'/projects/'+id+'/'+$scope.version+'/').on('value', function(snapshot) {
            console.log(snapshot.val());
            $scope.projectObject = snapshot.val();
        })
    }
    $scope.show = function(value) {
        $scope.showing = $scope.showing == value ? false: value;
        if(value == 18) {
            console.log($scope.secShowing);
        }
    }
    $scope.setShowing = function(index) {
        console.log(index);
        $scope.secShowing = $scope.secShowing == index ? false: index;
        console.log($scope.secShowing);
    }
})


app.filter('camelCaseToHuman', function() {
    return function(input) {
        return input
            // insert a space before all caps
            .replace(/([A-Z])/g, ' $1')
            // uppercase the first character
            .replace(/^./, function(str){ return str.toUpperCase(); });
    }
})
;
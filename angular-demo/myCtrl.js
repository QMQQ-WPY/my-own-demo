var app1 = angular.module('myApp', []);
app1.controller('myCtrl', function($scope){
    $scope.firstName = 'APP';
    $scope.secondName = 'STROE';
});

app1.directive('runoobDirective', function(){
    return {
        restrict: "M", //必须设置restrict才能通过类名调用， 默认值为 EA：E 作为元素名使用；A 作为属性使用；C 作为类名使用；M 作为注释使用；
        replace : true,  //与restrict配合使用，只有当设置为true时才可以通过注释调用
        template: "<p>自定义指令</p>"
    }
})



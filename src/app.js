angular.module('loanCalculator', ['ngMaterial']);

angular.module('loanCalculator').config( function($mdThemingProvider){

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
  });

angular.module('loanCalculator').factory('LoanModel', function(){
    var m = {
        calculateCurrentPayment: calculateCurrentPayment,
        init: init,
    };

    function calculateCurrentPayment(amount, rate, numberPayment){
        var top = (amount * rate)*Math.pow((1+rate), numberPayment);
        var base = Math.pow((1+rate), numberPayment) - 1;
        return top/base;
    }

    function init(){
        m.totalAmount = 0;
        m.rate = 7.8;
        m.TR = 0.3;
        m.numberPayment = 360;
    }
    return m;
})
angular.module('loanCalculator').controller('LoanCtrl', function($scope, LoanModel){
    var m = $scope.m = LoanModel;
    m.init();
});
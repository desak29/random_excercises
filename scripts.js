//var myInput = document.getElementById('myInput');
//
//myInput.addEventListener('keyup',function(){
//    console.log('user hit a key')
//    var userText=myInput.value;
//    document.getElementById('inputText').innerHTML = userText
//})
//jquey way of doing things
//$('#myInput').keyup(function(){
//    ('#inputText').html($('#myInput').val())
//})
var myApp = angular.module('myApp', []);

myApp.controller('myController', function ($scope) {
    //$scope.first ="Kochan";
    //$scope.last="Desai";
//        dollar sign here will allow view to see anything ****j
    $scope.dcClass = [

        //        {
        //        name:'Tristan',
        //        desc:'Stock Guy',
        //        luckyNumber:12
        //},{     name:'josh',
        //        desc:'CSS Wizard',
        //        luckyNumber:12
        //
        //},
        'tristan',
        'Josh',
        'Bogden',
        'lazlo',
        'keith',
        'jeremy',
        'curtis',
        'kochan',
        'will',
        'joe',
        'jonathan',
        'patrick'

    ];
    $scope.addStudent = function () {
        $scope.dcClass.push($scope.newStudent);
        $scope.newStudent = '';
    };
    $scope.removeStudent = function (index) {

        $scope.dcClass.splice(index, 1);
        console.log(newStudent)
    }


});
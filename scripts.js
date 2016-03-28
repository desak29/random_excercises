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

myApp.controller('myController', function($scope){
        $scope.first ="Kochan";
        $scope.last="Desai";
//        dollar sign here will allow view to see anything ****




});
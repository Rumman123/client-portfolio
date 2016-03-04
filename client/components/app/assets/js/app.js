/**
 * Created by Rumman on 3/4/2016.
 */
'use strict'

angular.module('clientsApp',['ui.router']).config(function($stateProvider,$urlRouterProvider,$locationProvider){

    $urlRouterProvider.otherwise("/landing");

    $stateProvider
        .state('landing',{
            url:'/landing',
            templateUrl:'components/app/landing/landing.html',
            controller:'landingCtrl',
            controllerAs:'landing'
        })
        .state('main',{
            url:'/main',
            templateUrl:'components/app/main/main.html',
            controller:'mainCtrl',
            controllerAs:'main'
        })
        .state('clientList',{
            url:'/clientList',
            templateUrl:'app/client-list.html',
            controller:'clientListCtrl',
            controllerAs:'clientList'
        })
        .state('clientDetail',{
            url:'clientDetail',
            templateUrl:'app/client-detail.html',
            controller:'clientDetailCtrl',
            controllerAs:'clientDetail'
         });
    $locationProvider.html5Mode(true);

});


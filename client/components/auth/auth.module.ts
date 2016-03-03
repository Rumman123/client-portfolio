'use strict';

angular.module('clientsApp.auth', [
  'clientsApp.constants',
  'clientsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

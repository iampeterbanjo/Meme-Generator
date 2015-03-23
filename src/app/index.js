'use strict';

angular.module('meme', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial', 'meme-background', 'meme-image', 'nav', 'meme-banner', 'about'])
	.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
		$stateProvider
			.state('about', {
				url: '/about',
				templateUrl: 'app/about/about.html',
				controller: 'AboutCtrl'
			});

		$stateProvider
			.state('meme', {
				url: '/meme',
				templateUrl: 'app/meme/meme.html',
				controller: 'MemeCtrl'
			});

		$stateProvider
			.state('meme.background', {
				url: '/background',
				templateUrl: 'app/meme-background/meme-background.html',
				controller: 'MemeBackgroundCtrl'
			});

		$stateProvider
			.state('meme.image', {
				url: '/image',
				templateUrl: 'app/meme-image/meme-image.html',
				controller: 'MemeImageCtrl'
			});

		$stateProvider
			.state('meme.banner', {
				url: '/banner',
				templateUrl: 'app/meme-banner/meme-banner.html',
				controller: 'MemeBannerCtrl'
			});

		$urlRouterProvider.otherwise('/meme/background');

		// theming
		$mdThemingProvider.theme('green');
	});
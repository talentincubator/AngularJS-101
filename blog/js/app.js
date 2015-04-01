angular.module('Blogger', ['ui.router', 'Blogger.posts', 'Blogger.admin', 'ngResource']).run(['$state' ,function($state) {
	$state.go('allPosts'); }]);
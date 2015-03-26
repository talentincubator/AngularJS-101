angular.module('Blogger', ['ui.router', 'Blogger.posts', 'Blogger.admin']).run(['$state' ,function($state) {
	$state.go('allPosts'); }]);
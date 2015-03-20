angular.module('Blogger').run(['state' ,function(state) {
	$state.go('allPosts'); }]);
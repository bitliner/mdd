'use strict';


module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-angular-templates');


	grunt.initConfig({
		ngtemplates: {
			mdd: {
				cwd:'views/',
				src: '**.html',
				dest: 'views/views.js'
			}
		}
	});

	grunt.registerTask('build', [
		'ngtemplates:mdd'
	]);
};
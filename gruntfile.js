module.exports = function(grunt) {

	// node require
	require('time-grunt')(grunt);

	grunt.initConfig({
		// create link to package.json items
    	pkg: grunt.file.readJSON('package.json'),
	

	}); //initConfig

	grunt.registerTask('default', []);
	
}; // wrapper function
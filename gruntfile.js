module.exports = function(grunt) {

	// node require
	require('time-grunt')(grunt);

	grunt.initConfig({
		// create link to package.json items
    	pkg: grunt.file.readJSON('package.json'),
		
    	compass: {                  	// Task
    		dev: {                   	// Target
				options: {              // Target options
			    	sassDir: 'components/sass',
			    	cssDir: 'builds/development/css',
			    	environment: 'development'
      			}
    		}, // close dist
    		prod: {                    // Another target
      			options: {
        			sassDir: 'components/sass',
        			cssDir: 'builds/production/css'
      			}
    		} // close dev
    	} // close compass

	}); //initConfig

	grunt.loadNpmTasks('grunt-contrib-compass');
	// grunt.loadNpmTasks('grunt-contrib-sass');
	
	grunt.registerTask('default', ['compass']);
	
}; // wrapper function
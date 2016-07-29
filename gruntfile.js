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
    	}, // close compass

    	postcss: {
			options: {
    			processors: [
      				require('pixrem')(), // disable if this gives issues with font mixins
      				require('autoprefixer')({ browsers: ['last 2 versions'] }),
      				require('cssnano')() // minify the result
    			]
  			},
  			dist: {
  				src:'builds/production/css/*.css'
  			}  // postcss options		    
    	}	// postcss

	}); //initConfig

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-postcss');
	
	grunt.registerTask('default', ['compass', 'postcss']);
	
}; // wrapper function
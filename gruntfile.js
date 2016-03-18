module.exports = function(grunt){
  "use strict";

  // ----------------------------------------------------
  grunt.initConfig({
    clean: {
      dist: ["dist"]
    },

    uglify: {
      options: {
        preserveComments: false,
		banner: "/*\n" +
			" * tinySelect ( https://github.com/McFizh/tinySelect )\n" +
			" *\n" +
			" * Licensed under MIT license.\n" +
			" *\n" +
			" * @version 1.0.0\n" +
			" * @author Pekka Harjamäki\n" +
			" */"
      },
      main: {
        src: "js/tinyselect.js",
        dest: "dist/js/tinyselect.min.js"
      }
    },

    copy: {
      css: {
        expand: true,
        src: "css/*",
        dest: "dist/",
        filter: "isFile"
      }
    },

	jshint: {
		all: [ "gruntfile.js", "js/tinyselect.js" ]
	},

	qunit: {
		all: [ "tests/*.html" ]
	}
  });

  // ----------------------------------------------------
  grunt.loadNpmTasks( "grunt-contrib-clean" );
  grunt.loadNpmTasks( "grunt-contrib-uglify" );
  grunt.loadNpmTasks( "grunt-contrib-copy" );
  grunt.loadNpmTasks( "grunt-contrib-qunit" );
  grunt.loadNpmTasks( "grunt-contrib-jshint" );

  // ----------------------------------------------------
  grunt.registerTask( "default", [ "clean:dist", "uglify:main", "copy:css" ] );
  grunt.registerTask( "test", [ "jshint:all", "qunit:all" ] );
};

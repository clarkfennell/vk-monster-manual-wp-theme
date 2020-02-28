module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  
      sass: {                              // Task
        dist: {                            // Target
          options: {                       // Target options
            style: 'compressed'
          },
          files: {                         // Dictionary of files
            'assets/css/style.min.css': 'assets/sass/main.scss',       // 'destination': 'source'
          }
        }
      },
  
      autoprefixer: {
        dist: {
          files: {
            'assets/css/style.min.css':'assets/css/style.min.css'
          },
          options: {
            map: true
          }
        }
      },
  
      uglify: {
        dist: {
          files: {
            'assets/js/dist/script.min.js': []
          }
        }
      },
  
      imagemin: {
        dist: {
          files: [
            {
              expand: true,
              cwd: 'assets/img/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'assets/img/'
            }
          ]
  
        }
      },
      watch: {
        sass: {
          files: 'assets/sass/**',
          tasks: ['sass', 'autoprefixer'],
        },
  
        uglify: {
          files: 'assets/js/**',
          tasks: ['newer:uglify'],
        },
  
        imagemin: {
          files: 'assets/img/**',
          tasks: ['newer:imagemin'],
        }
      },
    });
  
    grunt.event.on('watch', function(action, filepath, target) {
      grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
  
    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-exec');
  
    // Default task(s).
    grunt.registerTask('default', ['sass', 'autoprefixer', 'newer:imagemin', 'newer:uglify']);
  };
  
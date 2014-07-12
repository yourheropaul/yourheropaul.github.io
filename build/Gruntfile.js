module.exports = function(grunt) {

  // show elapsed time at the end
  require('time-grunt')(grunt);

  // Just In Time plugin loading
  require('jit-grunt')(grunt, {
    concat: 'grunt-contrib-concat',
    uglify: 'grunt-contrib-uglify',
    watch: 'grunt-contrib-watch',
    compass: 'grunt-contrib-compass',
    copy: 'grunt-contrib-copy',
    clean: 'grunt-contrib-clean',
    bower: 'grunt-bower-task',
    jshint: 'grunt-contrib-jshint',
    handlebars: 'grunt-contrib-handlebars',
    mocha: 'grunt-simple-mocha',
    browserify: 'grunt-browserify'
  });

  grunt.initConfig({

    // Package metadata
    pkg: grunt.file.readJSON('package.json'),

    // Build root
    distRoot: '../',

    // JavaScript
    jsDir: 'app/js/',
    jsDistDir: '<%= distRoot %>/<%= pkg.name %>/js/',

    // CSS
    cssDir: 'app/css/',
    cssDistDir: '<%= distRoot %>/<%= pkg.name %>/css/',

    // Templates
    tmplRoot: '../../html/',
    tmplDistDir: '../',

    // CSS
    compass: {
        dist: {
          options: {
            sassDir: '<%=cssDir%>custom',
            cssDir: '<%=cssDistDir%>',
            outputStyle: 'compressed'
          }
        },
        foundation: {
          options: {
            sassDir: '<%=cssDir%>foundation',
            cssDir: '<%=cssDistDir%>',
            outputStyle: 'compressed',
            force: true
          }
        }
    },

    // JS
    browserify: {
      basic: {
        src: ['<%=jsDir%>main.js'],
        dest: '<%=jsDistDir%>main.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%=grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          '<%=jsDistDir%>main.min.js': ['<%= browserify.basic.dest %>'],
          '<%=jsDistDir%>templates.min.js': ['<%=jsDistDir%>templates.js']
        }
      }
    },
    jshint: {
        options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish')
        },
        all: [
            'Gruntfile.js',
            '<%=jsDir%>*.js'
        ]
    },
    
    // Files
    copy: {
      images: {
        files: [
          {expand: true, cwd: 'app/images/', src: ['**'], dest: '<%= distRoot %>/<%= pkg.name %>/images/'}
        ]
      },
      fonts: {
        files: [
          {expand: true, cwd: 'app/fonts/', src: ['**'], dest: '<%= distRoot %>/<%= pkg.name %>/fonts/'}
        ]
      },
      lib: {
        files: [
          {expand: true, cwd: 'app/lib/', src: ['**'], dest: '<%= distRoot %>/<%= pkg.name %>/lib/'}
        ]
      },
      templates: {
        files: [
          {
            expand: true, 
            cwd: 'app/', 
            src: ['html/*.html'], 
            dest: '<%= tmplDistDir %>/', 
            rename: function(dest, src) {
              return (dest + src.split('/')[1]);
            }
          }
        ]
      }
    },

    // Handlebars template pre-compilation
    handlebars: {
      compile: {
        options: {
          namespace: "Templates",
          processName: function(filePath) {
            return filePath.replace(/app\/handlebars\/(.+)\.(hbs|handlebars)/,'$1');
          }
        },
        files: {
          "<%=jsDistDir%>templates.js": "app/handlebars/**/*.{hbs,handlebars}",
        }
      }
    },

    // Respond to file changes in various ways
    watch: {
      options: {
        spawn: false
      },
      js: {
        files: ['<%=jsDir%>**/*.js'],
        tasks: ['browserify','uglify']
      },
      css: {
        files: ['<%=cssDir%>**/*.{scss,sass}','!<%=cssDir%>foundation/**/*.{scss,sass}'],
        tasks: ['compass:dist']
      },
      images: {
          files: ['app/images/**'],
          tasks: ['copy:images']
      },
      fonts: {
          files: ['app/fonts/**'],
          tasks: ['copy:fonts']
      },
     /* lib: {
          files: ['app/lib/**'],
          tasks: ['copy:lib']
      },*/
      tmpl: {
          files: ['app/**/*.html'],
          tasks: ['copy:templates']
      },
      handlebars: {
          files: ['app/handlebars/**/*.{hbs,handlebars}'],
          tasks: ['handlebars','uglify']        
      }
   },

    // Clean out the build target directory
    clean: {
      options: { force: true },
      build: [".tmp/*", "<%= distRoot %>/<%= pkg.name %>/*"]
    },

    // Manage bower installation
    bower: {
      install: {
        options: {
          targetDir: 'app/lib',
          layout: 'byComponent',
          install: true,
          verbose: true,
          cleanTargetDir: true,
          bowerOptions: {}
        }
      }
    },

    // simple wrapper for running mocha tests,
    // before we have something more full featured like karma
    simplemocha: {
      options: {
        reporter: 'spec',
        slow: 200,
        timeout: 1000
      },

      all: { src: 'test/**/*.js' }
    }

  });

  grunt.registerTask('default', [
    'clean',
    'compass',
    'browserify',
    'handlebars',
    'uglify',
    'copy'
  ]);

  grunt.registerTask('test', [
    'simplemocha:all'
  ]);

  grunt.registerTask('foundation', [
    'compass:foundation'
  ]);

};
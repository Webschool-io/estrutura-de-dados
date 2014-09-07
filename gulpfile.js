(function(){

	
	'use strict';


	var gulp = require('gulp'),
      jshint = require('gulp-jshint'),
      stylish = require('jshint-stylish'),
      watch = require('gulp-watch'),
      clean = require('gulp-watch');
  

  var path = {
    jshintrc :'.jshintrc',
    scripts: 'exercicios/**/*.js',
    ready: "ready"
  }


	gulp.task('jshint', function(){
    gulp.src( path.scripts )
    .pipe( jshint( path.jshint ) )
    .pipe( jshint.reporter( stylish ) );
	});


  gulp.task('watch', function () {
    watch( {glob: path.scripts} )
      .pipe( jshint( path.jshint ) )
      .pipe( jshint.reporter( stylish ) );
  });


  gulp.task('copy', function(){
    gulp.src( path.scripts )
      .pipe( gulp.dest(path.ready) );
  });

  
  gulp.task('clean', function () {
    return gulp.src(path.ready, {read: false})
      .pipe(clean({force: true}));
  });


  gulp.task('build', ['jshint', 'copy']);


})();
var gulp          = require('gulp')
    browserSync   = require('browser-sync').create(),
    sass          = require('gulp-sass'),
    pug          = require('gulp-pug'),
    notify        = require("gulp-notify"),
    autoprefixer  = require('gulp-autoprefixer'),
    jshint        = require('gulp-jshint'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),
    imagemin      = require('gulp-imagemin'),
    del           = require('del');

gulp.task('pug', function() {
  return gulp.src('./**.pug')
    .pipe(pug())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function () {
 return gulp.src('./scss/app.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', notify.onError({
        message: "Error: <%= error.message %>",
        title: "Error compiling scss"
      })))
   .pipe(autoprefixer('last 2 version'))
   .pipe(gulp.dest('./dist/styles'));
});

gulp.task('js', function() {
  return gulp.src('./scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('images', function() {
  return gulp.src('./img/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('clean', function() {
    return del(['./dist/']);
});

gulp.task('copy', function() {
   gulp.src(['./favicon.ico', 'CNAME'])
   .pipe(gulp.dest('./dist/'));
});


gulp.task('watch', ['default'], function() {

  browserSync.init({
    server: "./dist"
  });

  // gulp.watch('index.pug', ['pug'], browserSync.reload);
  gulp.watch('./scss/**/*.scss', ['sass'], browserSync.reload);
  gulp.watch('./scripts/**/*.js', ['js'], browserSync.reload);
  gulp.watch('./img/**/*', ['images'], browserSync.reload);

});

// To run other tasks AFTER folder has been cleaned out
gulp.task('default', ['clean'], function() {
    gulp.start('pug', 'copy', 'sass', 'js', 'images');
});


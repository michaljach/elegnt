var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

// SASS task
gulp.task('scss', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/css/'));
});

// Templates and copy task
gulp.task('templates', function() {
    gulp.src('public/**/*')
        .pipe(gulp.dest('./dist/'))
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['scss']);
    gulp.watch('public/*.html', ['templates']);
});

// Default Task
gulp.task('default', ['scss', 'templates', 'watch']);
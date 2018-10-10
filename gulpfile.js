var gulp = require('gulp'), 
uglify = require ('gulp-uglify');

// Scripts Task
// Uglifies

gulp.task('scripts', function () {
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
});

gulp.task('styles', function () {
    console.log("Wassup");
});



//Adding gulp-sass

var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/styles'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('src/scss/**/*.scss', ['sass']);
});




gulp.task('default', ['scripts', 'styles', 'sass']);
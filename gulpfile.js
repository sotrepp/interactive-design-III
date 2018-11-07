var gulp = require('gulp');
var uglify = require ('gulp-uglify');
var sass = require('gulp-sass');
var $ = require('jquery');
var concat = require("gulp-concat");
var imagemin = require("gulp-imagemin"); 




// Scripts Task
// Uglifies

gulp.task('scripts', function () {
  
    return gulp.src([
      "node_modules/jquery/dist/jquery.min.js",
      "src/js/*.js"
      ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
});





gulp.task('styles', function () {
    console.log("Wassup");
});




//Adding gulp-sass

gulp.task('sass', function () {
  return gulp.src([
    'node_modules/bootstrap/scss/bootstrap.scss', 
    'src/scss/main.scss'
    ])
    
    .pipe(sass({
                outputStyle: "compressed"}).on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/styles'));
});





gulp.task('images', function () {
  return gulp.src('src/images/**')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
  
});




gulp.task('sass:watch', function () {
  gulp.watch('src/scss/main.scss', ['sass']);
});




gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/images/**', ['images']);
});




gulp.task('default', ['scripts', 'styles', 'sass', 'images']);








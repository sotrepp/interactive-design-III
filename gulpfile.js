var gulp = require('gulp'), 
uglify = require ('gulp-uglify'), 
sass = require('gulp-sass'),
jquery = require('jquery'),
concat = require("gulp-concat");

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


gulp.task('sass:watch', function () {
  gulp.watch('src/scss/main.scss', ['sass']);
});


 


gulp.task('default', ['scripts', 'styles', 'sass']);
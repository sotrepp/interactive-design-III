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


gulp.task('default', ['scripts', 'styles']);


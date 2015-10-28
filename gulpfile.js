var gulp = require('gulp'),
    modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
  gulp.src('./src/pdfmake.js')
      .pipe(modernizr())
      .pipe(gulp.dest("src/"))
});
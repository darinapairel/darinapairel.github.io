var gulp = require('gulp');

gulp.task('autoprefixer', function () {
    var postcss      = require('gulp-postcss');
    var autoprefixer = require('autoprefixer');

    return gulp.src('./css/*.css')
        .pipe(postcss([ autoprefixer({browsers:'safari >= 9, ie >= 9'}) ]))
        .pipe(gulp.dest('./dest'));
});
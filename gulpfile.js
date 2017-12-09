var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
    bootstrapDir: './node_modules/bootstrap-sass',
};

gulp.task('sass', function () {
    gulp.src('./sass/main.scss') // direktori tempat menyimpan file sass
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/assets/stylesheets'],
        outputStyle: 'compressed',
    }))
    .pipe(gulp.dest('./public/css')); // direktori tempat menyimpan file css
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest('./public/fonts'));
});

gulp.task('js', function() {
    return gulp.src([
        config.bootstrapDir + '/assets/javascripts/bootstrap.js',
        config.bootstrapDir + '/assets/javascripts/bootstrap.min.js'
        ])
    .pipe(gulp.dest('./public/js'));
});

gulp.task('default', ['sass', 'fonts','js']);

gulp.task('watch', function(){
  gulp.watch('./scss/**/*.scss', ['sass']); 
})



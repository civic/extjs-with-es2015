const gulp = require('gulp');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();

gulp.task('build', function(){
    return gulp.src('./app-src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app'));
});
gulp.task("watch", ["build"], function(){
    gulp.watch('app-src/**/*.js', ['build']);

    browserSync.init({
        server: {
            baseDir : "./"
        },
        files: [
            { 
                match: ['./build/**'] 
            }
        ],
        reloadDelay: 0,
        reloadDebounce: 1000,
        open: true
    });
});


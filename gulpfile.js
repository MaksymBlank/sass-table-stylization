const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');

gulp.task('server', ()=>{
    browserSync.init({
        server: {
            port: 3001,
            baseDir: './test/dist/'
        }
       
    });

    gulp.watch('./test/dist').on('change', browserSync.reload);
})

gulp.task('sass', ()=>{
    return gulp.src('./test/source/styles/**.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./test/dist/css'));
})

gulp.task('pug', ()=>{
    return gulp.src('./test/source/template/index.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./test/dist'));
})

gulp.task('watch', ()=>{
    gulp.watch('./test/source/styles/*.scss', ['sass']);
    gulp.watch('./test/source/template/index.pug', ['pug']);
})

gulp.task('default', ['server', 'sass', 'pug', 'watch']);
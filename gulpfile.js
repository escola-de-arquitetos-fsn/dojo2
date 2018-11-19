var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: './build/asciidoc/revealjs',
        host: '0.0.0.0',
        open: false
    });

    gulp.watch('build/asciidoc/revealjs/**/*.html')
        .on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
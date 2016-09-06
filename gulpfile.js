var gulp        = require('gulp');
var browserSync = require('browser-sync');
var cp          = require('child_process');
var deploy      = require('gulp-gh-pages');
var webpack     = require('webpack-stream');
var webpackConf = require('./webpack.config.js');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('dependencies', () => {
    gulp.src([
        'node_modules/locawebstyle/dist/stylesheets/locastyle.css',
        'node_modules/locawebstyle/dist/javascripts/libs/jquery-2.1.0.min.js',
        'node_modules/locawebstyle/dist/javascripts/locastyle.js',
    ]).pipe(gulp.dest('./assets'));

    gulp.src([
        'node_modules/locawebstyle/dist/stylesheets/fonts/**',
    ]).pipe(gulp.dest('./assets/fonts'));
});

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        open: false,
    });
});

gulp.task('webpack', function() {
    return gulp.src('js/Main.jsx')
        .pipe(webpack(webpackConf))
        .pipe(gulp.dest('js/dist/'));
});

/**
 * Watch html/md files, run jekyll & reload BrowserSync
 * if you add folder for pages, collection or datas, add them to this list
 */
gulp.task('watch', function () {
    gulp.watch(['_layouts/*', 'js/dist/*'], ['jekyll-rebuild']);
    gulp.watch(['js/**/*.jsx',], ['webpack']);
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./_site/**/*")
    .pipe(deploy())
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['dependencies', 'webpack', 'browser-sync', 'watch']);

import path from 'path';
import mixins from 'postcss-mixins';
import nested from 'postcss-nested';
import extend from 'postcss-extend';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

var pkg =  require('./package.json');
var $ = gulpLoadPlugins();

const CSS_SRC_DIR = './css/';

const DIST_DIR = './dist/';
const CSS_DIST_DIR = path.join(DIST_DIR, 'css/');
const JS_DIST_DIR = path.join(DIST_DIR, 'js/');

gulp.task('css', () => {
  return gulp.src(CSS_SRC_DIR + '**/' + pkg.name + '.css')
    .pipe($.cssnext({
      compress: process.env.NODE_ENV === 'production',
      plugins: [
        nested,
        mixins,
        extend,
      ]
    }))
    .pipe(gulp.dest(CSS_DIST_DIR))
    .pipe($.livereload());
});

gulp.task('watch', () => {
  $.livereload.listen();
  return gulp.watch(CSS_SRC_DIR + '**/*.css', ['css']);
});

gulp.task('build', ['css']);

gulp.task('default', ['build']);
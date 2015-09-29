import path from 'path';
import mixins from 'postcss-mixins';
import nested from 'postcss-nested';
import extend from 'postcss-sass-extend';
import extend2 from 'postcss-extend';
import repeat from 'postcss-for';
import simpleVars from 'postcss-simple-vars'
import each from 'postcss-each'
import cssMqpacker from 'css-mqpacker';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import csswring from 'csswring';

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
        each,
        mixins,
        extend2,
        extend,
        nested,
        repeat,
        simpleVars,
        cssMqpacker,
      ]
    }))
    .pipe(gulp.dest(CSS_DIST_DIR))
    .pipe($.livereload())
    .pipe($.postcss([
      csswring
    ]))
    .pipe($.rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest(CSS_DIST_DIR));
});

gulp.task('watch', () => {
  $.livereload.listen();
  return gulp.watch(CSS_SRC_DIR + '**/*.css', ['css']);
});

gulp.task('build', ['css']);

gulp.task('default', ['build']);
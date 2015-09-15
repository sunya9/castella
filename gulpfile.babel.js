import pkg from 'package.json';
import autoprefixer from 'autoprefixer';
import csswring from 'csswring';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

var $ = gulpLoadPlugins();

const CSS_SRC_DIR = './css/';

const DIST_DIR = './dist/';
const CSS_DIST_DIR = DIST_DIR + 'css/';
const JS_DIST_DIR = DIST_DIR + 'js/';

gulp.task('css', () => {
  var processors = [
    autoprefixer({broswers: ['last 1 version', 'ie9']}),
    csswring()
  ];
  return gulp.src(CSS_SRC_DIR + '**/*.css')
    .pipe(processors)
    .pipe(gulp.dest(CSS_DIST_DIR + pkg.name + '.css'))
    .pipe($.livereload());
});

gulp.task('watch', () => {
  $.livereload.listen();
  return gulp.watch(CSS_SRC_DIR + '**/*.css', ['css']);
});
//////////
// Modules

const gulp          = require('gulp'),
      terser        = require('gulp-terser'),     // Minify js
      babel         = require('gulp-babel'),      // Transpiler
      webpack       = require('webpack-stream'),  // Bundler
      rename        = require('gulp-rename'),
      { src, dest } = require('gulp');

////////////
// Variables

var paths = {
  src          : "./src/",
  dist         : "./dist/",
  node_modules : "./node_modules/",
  bootstrap    : "./node_modules/bootstrap/"
};

// Javascript source
var pathsJs = {
  in: [
    paths.src + 'js/*.js'
  ],
  out: paths.dist + 'js'
};

//////////
// Tasks

// Compile JS
function jsTask() {
  return (
    src(pathsJs.in)
    .pipe(terser())
    .pipe(babel({
			presets: ['@babel/preset-env']
		}))
    .pipe(webpack({mode: "production"}))
    .pipe(rename('slider-bs5.js'))
    .pipe(dest(pathsJs.out))
  )
}

// Watch
function watchTask(){
  gulp.watch(
      [paths.src + 'js/**/*.js'],
      gulp.parallel(jsTask)
  );
}

// Exports
exports.js = jsTask;
exports.watch = watchTask;

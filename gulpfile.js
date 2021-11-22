//////////
// Modules

const gulp                = require('gulp'),
      terser              = require('gulp-terser'),     // Minify js
      csso                = require('gulp-csso'),       // Minify css
      babel               = require('gulp-babel'),      // Transpiler
      webpack             = require('webpack-stream'),  // Bundler
      rename              = require('gulp-rename'), 
      { src, dest, watch} = require('gulp');

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

// Css source
var pathsCss = {
  in: [
    paths.src + 'css/*.css'
  ],
  out: paths.dist + 'css'
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


// Compile css
function cssTask() {
  return (
      src(pathsCss.in)
      .pipe(csso())
      .pipe(dest(pathsCss.out))
  )
}


// Watch
function watchTask(){
  watch( paths.src + 'js/**/*.js', jsTask );
  watch( paths.src + 'css/**/*.css', cssTask );
}

// Exports
exports.js = jsTask;
exports.css = cssTask;
exports.watch = watchTask;

//////////
// Modules

const gulp                = require('gulp'),
      sass                = require('gulp-sass')(require('sass')),
      terser              = require('gulp-terser'),     // Minify js
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

// Scss source
// Scss options
var scss = {
  in: paths.src + 'scss/*.scss',
  out: paths.dist + 'css/',
  watch: paths.src + 'scss/**/*.scss',
  sassOpts: {
      outputStyle: 'compressed',
      precison: 3,
  }
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
    .pipe(rename('extended-carousel.js'))
    .pipe(dest(pathsJs.out))
  )
}

// Compile css
function styleTask() {
  return (
      src(scss.in)
      .pipe(sass(scss.sassOpts))
      .pipe(dest(scss.out))
  )
}

// Watch
function watchTask(){
  watch( paths.src + 'js/**/*.js', jsTask );
  watch( paths.src + 'scss/**/*.scss', styleTask );
}

// Exports
exports.js = jsTask;
exports.css = styleTask;
exports.watch = watchTask;

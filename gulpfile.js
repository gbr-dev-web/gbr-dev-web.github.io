const gulp = require('gulp');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass')); // compatível com Dart Sass
const wait = require('gulp-wait');
const babel = require('gulp-babel');
const rename = require('gulp-rename');

// Tarefa para scripts JavaScript
function scripts() {
  return gulp.src('./js/scripts.js')
    .pipe(plumber({
      errorHandler: function (err) {
        console.error(err);
        this.emit('end');
      }
    }))
    .pipe(babel({
      presets: [['@babel/env', { modules: false }]]
    }))
    .pipe(uglify({
      output: {
        comments: /^!/
      }
    }))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./js'));
}

// Tarefa para compilar SCSS
function styles() {
  return gulp.src('./scss/styles.scss')
    .pipe(wait(250))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}

// Tarefa de observação
function watchFiles() {
  gulp.watch('./js/scripts.js', scripts);
  gulp.watch('./scss/styles.scss', styles);
}

// Exportando tarefas
exports.scripts = scripts;
exports.styles = styles;
exports.watch = watchFiles;

// Tarefa padrão
exports.default = gulp.series(
  gulp.parallel(scripts, styles),
  watchFiles
);

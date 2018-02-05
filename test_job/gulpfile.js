var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'), // Подключаем Scss пакет
    autoprefixer = require('gulp-autoprefixer');
    // cssnano = require('gulp-cssnano');

gulp.task('scss', function() { // Создаем таск "sass"
  return gulp.src(['scss/*.scss']) // Берем источник
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-scss
    .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('css')) // Выгружаем результата в папку css
  });

gulp.task('watch', function() {
  gulp.watch(['scss/*.scss'], ['scss']); // Наблюдение за sass файлами в папке scss
});

gulp.task('default', ['watch']);
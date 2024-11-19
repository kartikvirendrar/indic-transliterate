const gulp = require('gulp');
const eslint = require('gulp-eslint');

// Task to build eslint rules
gulp.task('build-eslint-rules', () => {
  // This is where you can define the task logic
  // For example, running eslint checks on your source files

  return gulp.src(['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'])  // Adjust paths to your project structure
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());  // Ensures gulp fails if there are eslint errors
});

// Default gulp task (optional)
gulp.task('default', gulp.series('build-eslint-rules'));

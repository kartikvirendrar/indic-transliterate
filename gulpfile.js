const gulp = require('gulp');
const eslint = require('gulp-eslint');

// Task to build eslint rules
gulp.task('build-eslint-rules', () => {
  // This is where you can define the task logic
  // For example, running eslint checks on your source files

  return 1
});

// Default gulp task (optional)
gulp.task('default', gulp.series('build-eslint-rules'));

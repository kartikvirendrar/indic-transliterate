import gulp from 'gulp';
import eslint from 'gulp-eslint';

// Task to build eslint rules
export function buildEslintRules() {
  return gulp.src(['src/**/*.{js,jsx,ts,tsx}', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

// Alias for compatibility
gulp.task('build-eslint-rules', buildEslintRules);

// Default task
export default gulp.series(buildEslintRules);

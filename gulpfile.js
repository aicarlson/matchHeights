var gulp 	= require('gulp');
var uglify 	= require('gulp-uglify');
var rename  = require('gulp-rename');

gulp.task('scripts', function() {
	return gulp.src('src/matchHeights.js')
		.pipe(uglify({preserveComments:'all'}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('build/'));
});

gulp.task('default', ['scripts']);
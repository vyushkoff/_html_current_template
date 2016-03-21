var gulp = require('gulp'),
		sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('src/sass/**/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('build'))
})
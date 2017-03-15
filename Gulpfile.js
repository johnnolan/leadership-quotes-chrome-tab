var  gulp, runSequence, del;
gulp = require('gulp');
runSequence = require('run-sequence');
del = require('del');

var outputPath = 'dist';

gulp.task('delete-content', function() {
	return del([
		'dist/**/*'
	]);
});

gulp.task('copy-files', function() {
	gulp.src([
		'_locales/**/*'
	]).pipe(gulp.dest(outputPath + '/_locales'));
	gulp.src([
		'src/bg/**/*'
	]).pipe(gulp.dest(outputPath + '/bg'));
	gulp.src([
		'icons/**/*'
	]).pipe(gulp.dest(outputPath + '/icons'));
	gulp.src([
		'src/data/**/*'
	]).pipe(gulp.dest(outputPath + '/data'));
	gulp.src([
		'src/img/**/*'
	]).pipe(gulp.dest(outputPath + '/img'));
	gulp.src([
		'src/js/**/*'
	]).pipe(gulp.dest(outputPath + '/js'));
	gulp.src([
		'manifest.json'
	]).pipe(gulp.dest(outputPath));
	return gulp.src([
		'src/override/**/*'
	]).pipe(gulp.dest(outputPath + '/override'));
});

gulp.task('build', function(callback) {
	runSequence('delete-content', 'copy-files', callback);
});
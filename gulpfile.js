const 	gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		gls = require('gulp-live-server'),
		browserify = require('gulp-browserify'),
		rename = require('gulp-rename');

gulp.task('default', ['browserify', 'css', 'watch', 'serve']);

gulp.task('css', function() {
	return gulp.src([
		'node_modules/angular-material/angular-material.css',
		/* Other css fles here */
	])
	.pipe(rename('app.css'))
	.pipe(gulp.dest('public/css'));
});

gulp.task('browserify', function() {
	return gulp.src([
				'app/app.js',
				/* Other js files here */
			])
			.pipe(browserify())
			// .pipe(uglify())
			.pipe(rename('app.js'))
			.pipe(gulp.dest('public/js/'));
});

gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['browserify']);
});

gulp.task('serve', function() {
	var server = gls.static('./public', 3000);
	server.start();

	gulp.watch('public/js/**/*.js', function(file) {
		server.notify.apply(server, [file]);
	});
	gulp.watch('public/**/*.html', function(file) {
		server.notify.apply(server, [file]);
	});
});

gulp.task('cordova', function() {

	gulp.src([
		'public/**/*'
	]).
	pipe(gulp.dest('cordova/www/'));

	gulp.src([
		'app/resources/icons/android/*'
	]).
	pipe(gulp.dest('cordova/res/android'));

	gulp.src([
		'app/resources/splashscreen/android/*'
	]).
	pipe(gulp.dest('cordova/res/screen/android'));

});
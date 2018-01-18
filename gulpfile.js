var 
	gulp           = require('gulp'),
	sass           = require('gulp-sass'),
	browserSync    = require('browser-sync'),
	concat         = require('gulp-concat'),
	uglify         = require('gulp-uglify'),
	cleanCSS       = require('gulp-clean-css'),
	rename         = require('gulp-rename'),
	del            = require('del'),
	bourbon    		= require("bourbon").includePaths,
	autoprefixer   = require('gulp-autoprefixer'),
	notify         = require("gulp-notify");



gulp.task('browser-sync', function() {
	browserSync({
		server: {baseDir: 'app'},
		notify: false,
		browser: 'firefox',
	});
});


gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass({
		outputStyle: 'expand',
		includePaths: require('bourbon').includePaths
		}).on("error", notify.onError()))
	.pipe(autoprefixer(['last 15 versions']))
	// .pipe(cleanCSS()) // Опционально, закомментировать при отладке
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});


gulp.task('common-js', function() {
	return gulp.src([
		'app/js/common.js',
		])
	//.pipe(concat('common.min.js'))
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
});


gulp.task('js', ['common-js'], function() {
	return gulp.src([
		'app/libs/jquery/jquery-3.2.1.min.js',
		'app/libs/bootstrap/js/bootstrap.min.js',
		'app/libs/owl-carousel/owl.carousel.min.js',
		'app/libs/equal-heights/jquery.equalheights.min.js',
		'app/libs/magnific-popup/jquery.magnific-popup.min.js',
		])
	.pipe(concat('libs.min.js'))
	// .pipe(uglify()) // Минимизировать весь js (на выбор)
	.pipe(gulp.dest('app/js'))
	
});


gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
	gulp.watch('app/**/*.html', browserSync.reload);
});


gulp.task('default', ['watch']);
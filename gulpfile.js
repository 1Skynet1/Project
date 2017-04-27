var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

gulp.task("copy-index",function(){
	gulp.src("index.html").pipe(gulp.dest("Welcome_to_Steam"));
});

gulp.task("copy-img",function(){
	gulp.src("img/**/*").pipe(gulp.dest("Welcome_to_Steam/img"));
});

gulp.task("sass",function(){
	gulp.src("js/index.scss").pipe(sass()).pipe(gulp.dest("Welcome_to_Steam/css/index.css"));
});
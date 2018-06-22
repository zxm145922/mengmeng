const gulp=require("gulp"),
	minifyCss=require("gulp-clean-css");
	

gulp.task("css",function(){
	gulp.src("src/css/*.css")
	.pipe(minifyCss())
	.pipe(gulp.dest("dist/css/"));
	
});


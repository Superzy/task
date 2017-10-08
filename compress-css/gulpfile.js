var gulp = require("gulp"),
    css=require("gulp-minify-css");
gulp.task("css",function(){
    gulp.src("./css/*.css")
        .pipe(css())
        .pipe(gulp.dest("./min/"));
})
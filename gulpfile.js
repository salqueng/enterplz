var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src(["enterplz.js"])
    .pipe(babel({
      modules: "umd",
      sourceMap: true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task("watch", function(){
  gulp.watch('*.js', ['default'])
});

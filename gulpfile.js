const gulp = require("gulp");
const zip = require("gulp-zip");

function bundle() {
  return gulp
    .src([
      "**/*",
      "!node_modules/**",
      "!src/**",
      "!bundeled/**",
      "!gulpfile.js",
      "!package.json",
      "!package-lock.json",
      "!webpack.config.js"
    ])
    .pipe(zip("oldphillys-blocks.zip"))
    .pipe(gulp.dest("bundeled"));
}

exports.bundle = bundle;

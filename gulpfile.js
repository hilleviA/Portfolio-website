//Initierar moduler
const { src, dest, watch, series, parallel } = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass'); 
sass.compiler = require('node-sass');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const babel = require("gulp-babel");

//Sökvägar till de olika filerna
const filePaths = {
    htmlPath: "src/**/*.html",
    jsPath: "src/**/*.js",
    sassPath: "src/**/*.scss",
    imagePath: "src/images/*"
};


//Kopierar och minifierar bilder till Pub-katalogen
function imageTask() {
    return src(filePaths.imagePath)
    .pipe(imagemin())
    .pipe(dest("pub/images"))
    .pipe(browserSync.stream());
};

//Kopierar och minifierar HTML-filer till Pub-katalogen
function htmlTask() {
    return src(filePaths.htmlPath)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("pub"))
    .pipe(browserSync.stream());
};

function sassTask() {
    return src(filePaths.sassPath)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(dest("pub/css"))
    .pipe(browserSync.stream());
};


//Slår samman, minifierar och flyttar JavaScriptfiler till Pub-katalogen
function jsTasks() {
    return src(filePaths.jsPath)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(dest("pub/js"))
    .pipe(browserSync.stream());
};


//Watch funktion
function watchTask() {
    browserSync.init({
        server: {
            baseDir: "./pub"
        }   
    });
    //Filerna att hålla koll på
    watch([filePaths.htmlPath, filePaths.jsPath, filePaths.sassPath, filePaths.imagePath],
    //Kör följande funktioner samtidigt
    parallel(htmlTask, jsTasks, sassTask, imageTask)).on("change", browserSync.reload);
};

//Default funktion som kopierar alla filer till Pub-katalogen från början och sen statar Watcher 
//som håller koll på ändringar 
exports.default = series(
    parallel(htmlTask, jsTasks, sassTask, imageTask), 
    watchTask
);


const { src, dest, watch, series, parallel } = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');

//const imagemin = require('gulp-imagemin');


//Sökvägar till de olika filerna
const filePaths = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",
    jsPath: "src/**/*.js"
};
    //imagePath: "src/images/*" 


//Kopierar och minifierar HTML-filer till Pub-katalogen
function htmlTask() {
    return src(filePaths.htmlPath)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("pub"));

};

//Slår samman, minifierar och kopierar CSS-filer till Pub-katalogen
function cssTasks() {
    return src(filePaths.cssPath)
    .pipe(concat("style.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest("pub/css"));
};

//Slår samman, minifierar och flyttar JavaScriptfiler till Pub-katalogen
function jsTasks() {
    return src(filePaths.jsPath)
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(dest("pub/js"));
};

/*

//Kopierar och minifierar bilder till Pub-katalogen
function imageTask() {
    return src(filePaths.imagePath)
    .pipe(imagemin())
    .pipe(dest("pub/images"));
};

*/


//Watch funktion
function watchTask() {
    //Filerna att hålla koll på
    watch([filePaths.htmlPath, filePaths.cssPath, filePaths.jsPath],
    //Kör följande funktioner samtidigt
    parallel(htmlTask, cssTasks, jsTasks));
};


//Default funktion som kopierar alla filer till Pub-katalogen från början och sen statar Watcher 
//som håller koll på ändringar 
exports.default = series(
    parallel(htmlTask, cssTasks, jsTasks), 
    watchTask
);

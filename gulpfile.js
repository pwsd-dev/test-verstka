const gulp = require('gulp');

// ===============================================
// Task clear
// ===============================================
const clear = require('./gulp/gulp.task.clear');
// ===============================================
// Task cleanRemoveFiles
// ===============================================
const cleanRemoveFiles = require('./gulp/gulp.task.cleanRemoveFiles');


// ===============================================
// Tasks static
// ===============================================
const static = require('./gulp/gulp.task.static');


// ===============================================
// Tasks html
// ===============================================
const pug2html = require('./gulp/gulp.task.pug2html');

// ===============================================
// Tasks styles
// ===============================================
const styles = require('./gulp/gulp.task.styles');

// ===============================================
// Tasks grid
// ===============================================
const grid = require('./gulp/gulp.task.smartgrid');


// ===============================================
// Tasks scripts
// ===============================================
const script = require('./gulp/gulp.task.scripts');

// ===============================================
// Tasks build
// ===============================================

gulp.task('build', gulp.parallel('htmlBuild', 'styles', 'scripts'));

// ===============================================
// Tasks dist to backend
// ===============================================

const dist = require('./gulp/gulp.task.distToBackend');


// ===============================================
// Tasks create components
// ===============================================

const components = require('./gulp/gulp.create.components');


// ===============================================
// Tasks watch
// ===============================================
const watch = require('./gulp/gulp.task.watch');



'use strict';

var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var browserSync = require('browser-sync').create();

gulp.task('spritesmith', function() {});

gulp.task('browserSync', ['spritesmith'], function() {
    browserSync.init({
        server: './dist'
    });
});

gulp.task('default', ['browserSync'])

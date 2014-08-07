var gulp = require('gulp'),
    inquirer = require('inquirer'),
    template = require('gulp-template'),
    conflict = require('gulp-conflict'),
    _ = require('underscore.string');

gulp.task('default', function(done) {
  inquirer.prompt([
    {type: 'input', name: 'name', message: 'Name for your playground?', default: 'Angular Playground'}
  ],
  function(answers) {
    answers.nameDashed = _.slugify(answers.name);
    gulp.src(__dirname + '/templates/**')
      .pipe(template(answers))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./'))
      .pipe(install())
      .on('finish', function() {
        done();
      });
  });
});

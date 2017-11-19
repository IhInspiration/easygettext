const gulp= require('gulp')
const exec= require('child_process').exec

gulp.task('watch', [], ()=>{
  gulp.watch('./src/**/*', [()=>{
    exec('npm run prepublish')
  }])
})

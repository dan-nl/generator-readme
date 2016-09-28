'use strict';

module.exports = function writing() {
  var package_json = this.fs.readJSON( './package.json' );

  this.log( 'writing' );

  this.fs.copyTpl(
    this.templatePath( 'readme.md' ),
    this.destinationPath( './readme.md' ),
    {
      description: package_json.description,
      github_user: this.user.git.name(),
      project: package_json.name
    }
  );
};

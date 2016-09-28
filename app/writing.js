'use strict';

module.exports = function writing() {
  this.fs.copyTpl(
    this.templatePath( 'readme.md' ),
    this.destinationPath( './readme.md' ),
    {
      description: this.package_json.description,
      github_user: this.user.git.name(),
      project: this.package_json.name
    }
  );
};

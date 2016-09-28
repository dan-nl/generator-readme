'use strict';

module.exports = function writing() {
  this.fs.copyTpl(
    this.templatePath( 'readme.md' ),
    this.destinationPath( './readme.md' ),
    {
      description: this.prompt_answers.description,
      github_user: this.prompt_answers.github_user,
      project: this.prompt_answers.project
    }
  );
};

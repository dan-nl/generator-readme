'use strict';

/**
 * @returns {void}
 */
function writing() {
  this.fs.copyTpl(
    this.templatePath( 'readme.md' ),
    this.destinationPath( './readme.md' ),
    {
      description: this.options.prompts.get( 'description' ),
      github_user: this.options.prompts.get( 'github_user' ),
      project: this.options.prompts.get( 'project' )
    }
  );
}

module.exports = writing;

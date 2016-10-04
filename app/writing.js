/* eslint no-invalid-this: off */

'use strict';

/**
 * @returns {undefined}
 */
function writing() {
  if ( !this.options.PromptAnswers.get( 'create-readme' ) ) {
    return;
  }

  this.fs.copyTpl(
    this.templatePath( 'readme.md' ),
    this.destinationPath( './readme.md' ),
    {
      description: this.options.PromptAnswers.get( 'description' ),
      github_user: this.options.PromptAnswers.get( 'github_user' ),
      project: this.options.PromptAnswers.get( 'project' )
    }
  );
}

module.exports = writing;

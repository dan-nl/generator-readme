'use strict';

/**
 * module dependencies
 */
var addAnswersToBase = require( './helpers/add-answers-to-base' );

function prompting() {
  var prompts = [];

  if ( !this.prompt_answers.project ) {
    prompts.push(
      {
        type: 'input',
        name: 'project',
        message: 'project',
        default: this.package_json.name
      }
    );
  }

  if ( !this.prompt_answers.description ) {
    prompts.push(
      {
        type: 'input',
        name: 'description',
        message: 'description',
        default: this.package_json.description
      }
    );
  }

  if ( !this.prompt_answers.github_user ) {
    prompts.push(
      {
        type: 'input',
        name: 'github_user',
        message: 'github user',
        default: this.user.git.name()
      }
    );
  }

  if ( prompts.length < 1 ) {
    return;
  }

  this.log( 'prompting for readme' );

  return this.prompt( prompts )
    .then(
      function ( answers ) {
        addAnswersToBase( this, answers );
      }.bind( this )
    );
}

module.exports = prompting;

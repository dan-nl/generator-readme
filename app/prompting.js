'use strict';

/**
 * module dependencies
 */
var addAnswersToBase = require( './helpers/add-answers-to-base' );

function prompting() {
  var prompts = [];

  prompts.push(
    {
      type: 'input',
      name: 'project',
      message: 'project',
      default: this.package_json.name
    }
  );

  prompts.push(
    {
      type: 'input',
      name: 'github_user',
      message: 'github user',
      default: this.user.git.name()
    }
  );

  prompts.push(
    {
      type: 'input',
      name: 'description',
      message: 'description',
      default: this.package_json.description
    }
  );

  return this.prompt( prompts )
    .then(
      function ( answers ) {
        addAnswersToBase( this, answers );
      }.bind( this )
    );
}

module.exports = prompting;

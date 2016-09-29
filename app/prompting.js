'use strict';

/**
 * module dependencies
 */
var getModulePrompts = require( './helpers/get-module-prompts' );
var promptingHelper = require( 'yeoman-prompting-helpers' ).promptingHelper;

/**
 * @return {Promise}
 */
function prompting() {
  return promptingHelper( this, getModulePrompts );
}

module.exports = prompting;

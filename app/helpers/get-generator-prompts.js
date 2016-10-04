'use strict';

/**
 * module dependencies
 */
var loadJson = require( 'yeoman-helpers' ).loadJson;

/**
 * @param {Object} generator
 * @returns {Array}
 */
function getGeneratorPrompts( generator ) {
  var package_json;

  package_json = loadJson( generator.destinationPath( 'package.json' ), { sync: true } );

  return [
    {
      default: package_json.author,
      message: 'create readme.md',
      name: 'create-readme',
      type: 'confirm'
    },
    {
      default: package_json.name,
      message: 'project',
      name: 'project',
      type: 'input',
      when: function ( answers ) {
        return answers[ 'create-readme' ];
      }
    },
    {
      default: package_json.description,
      message: 'description',
      name: 'description',
      type: 'input',
      when: function ( answers ) {
        return answers[ 'create-readme' ];
      }
    },
    {
      default: generator.user.git.name(),
      message: 'github user',
      name: 'github_user',
      store: true,
      type: 'input',
      when: function ( answers ) {
        return answers[ 'create-readme' ];
      }
    }
  ];
}

module.exports = getGeneratorPrompts;

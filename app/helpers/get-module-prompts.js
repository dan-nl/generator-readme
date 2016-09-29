'use strict';

/**
 * @param {generator.Base} generator
 *
 * @returns {Array}
 */
function getModulePrompts( generator ) {
  return [
    {
      type: 'input',
      name: 'project',
      message: 'project',
      default: generator.package_json.name
    },
    {
      type: 'input',
      name: 'description',
      message: 'description',
      default: generator.package_json.description
    },
    {
      type: 'input',
      name: 'github_user',
      message: 'github user',
      store: true,
      default: generator.user.git.name()
    }
  ];
}

module.exports = getModulePrompts;

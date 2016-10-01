'use strict';

/**
 * @param {Object} generator
 * @returns {Array}
 */
function getGeneratorPrompts( generator ) {
  return [
    {
      default: generator.package_json.name,
      message: 'project',
      name: 'project',
      type: 'input'
    },
    {
      default: generator.package_json.description,
      message: 'description',
      name: 'description',
      type: 'input'
    },
    {
      default: generator.user.git.name(),
      message: 'github user',
      name: 'github_user',
      store: true,
      type: 'input'
    }
  ];
}

module.exports = getGeneratorPrompts;

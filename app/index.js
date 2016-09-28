'use strict';

var generators = require( 'yeoman-generator' );
var generator = {};

generator.initializing = require( './initializing' );
generator.writing = require( './writing' );

module.exports = generators.Base.extend( generator );

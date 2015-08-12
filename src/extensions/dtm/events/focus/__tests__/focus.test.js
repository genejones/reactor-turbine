'use strict';

describe('focus event type', function() {
  var testStandardEvent = require('../../__tests__/helpers/testStandardEvent');
  var publicRequire = require('../../../../../engine/publicRequire');
  var delegateInjector = require('inject!../focus');
  var delegate = delegateInjector({
    createBubbly: publicRequire('createBubbly')
  });

  testStandardEvent(delegate, 'focus');
});

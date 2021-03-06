'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

const authEvents = require('./auth/events.js');
const logbookEvents = require('./logbook/events.js');

$(() => {
  authEvents.addHandlers();
  logbookEvents.addAjaxHandlers();
});

// use require without a reference to ensure a file is bundled
require('./example');

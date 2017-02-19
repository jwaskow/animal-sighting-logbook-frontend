'use strict';

const logApi = require('./api');
// const logStore = require('./gameStore');
const logUi = require('./ui');
// const getFormFields = require('../../../lib/getFormFields');

const onIndex = function (event) {
  event.preventDefault();
  logApi.getIndex()
    .then(logUi.indexSuccess)
    .catch(logUi.failure);
};

const onCreate = function (event) {
  event.preventDefault();
  // let data = getFormFields(event.target);
  logApi.create(data)
    .then(logUi.createSuccess)
    .catch(logUi.failure);
};

const onShow = function (event) {
  event.preventDefault();
  // let id = parseInt($('#game-id').val());
  logApi.show(id)
    .then(logUi.success)
    .catch(logUi.failure);
};

const addAjaxHandlers = () => {
  $('#get-index-button').on('click', onIndex);
  $('#create-entry-button').on('submit', onCreate);
  // $('#showGameById').on('submit', onShow);
};

module.exports = {
  addAjaxHandlers,
  // onIndex,
  onShow,
};

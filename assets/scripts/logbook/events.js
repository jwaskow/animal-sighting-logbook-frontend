'use strict';

const logApi = require('./api');
const logUi = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');

const onIndex = function (event) {
  event.preventDefault();
  logApi.getIndex()
    .then(logUi.indexSuccess)
    .catch(logUi.failure);
};

const onCreate = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  logApi.create(data)
    .then(logUi.createSuccess)
    .then(logApi.getIndex)
    .then(logUi.indexSuccess)
    .catch(logUi.createEntryFailure);
};

const onUpdate = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  let id = data.post.id;
  logApi.update(id, data)
    .then(logUi.updateSuccess)
    .then(logApi.getIndex)
    .then(logUi.indexSuccess)
    .catch(logUi.updateEntryFailure);
};

const onRemovePost = (event) => {
  event.preventDefault();
  let id = event.target.getAttribute('data-id');
  logApi.destroy(id)
    .then(logUi.removePostSuccess)
    .then(logApi.getIndex)
    .then(logUi.indexSuccess)
    .catch(logUi.failure);
};

const unhideUpdate = () => {
  $('#update-entry').removeClass('hidden');
  $('#create-entry').addClass('hidden');
};

const hideUpdate = () => {
  $('#status-box').text('Update Cancelled');
  $('.create-entry-message').text('');
  $('.update-entry-message').text('');
  $('.update-field').val('');
  $('#update-entry').addClass('hidden');
  $('#create-entry').removeClass('hidden');
};

const addAjaxHandlers = () => {
  $('#get-index-button').on('click', onIndex);
  $('#create-entry').on('submit', onCreate);
  $('#entry-container').on('click', '#removePost', onRemovePost);
  $('#show-update-form').on('click', unhideUpdate);
  $('#update-entry').on('submit', onUpdate);
  $('#cancel-update').on('click', hideUpdate);
};

module.exports = {
  addAjaxHandlers,
  onIndex,
};

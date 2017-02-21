'use strict';

const logApi = require('./api');
// const store = require('../store');
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
  // .then((response) => {
  //   store.post = response.post;
  // })
    .then(logUi.createSuccess)
    .catch(logUi.failure);
};

// const onShow = function (event) {
//   event.preventDefault();
//   // let id = parseInt($('#game-id').val());
//   logApi.show(id)
//     .then(logUi.success)
//     .catch(logUi.failure);
// };

const onRemovePost = (event) => {
  event.preventDefault();
  let id = event.target.getAttribute('data-id');
  console.log(id);
  logApi.destroy(id)
    .then(logUi.removePostSuccess)
    .catch(logUi.failure);
};

const addAjaxHandlers = () => {
  $('#get-index-button').on('click', onIndex);
  $('#create-entry').on('submit', onCreate);
  $('#entry-container').on('click', '#removePost', onRemovePost);
  // $('#showGameById').on('submit', onShow);
};

module.exports = {
  addAjaxHandlers,
  onIndex,
  // onShow,
};

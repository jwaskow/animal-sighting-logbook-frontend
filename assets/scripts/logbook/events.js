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
    .then(logApi.getIndex)
    .then(logUi.indexSuccess)
    .catch(logUi.failure);
};

const onUpdate = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  let id = data.post.id;
  console.log(data);
  console.log(id);
  logApi.update(id, data)
    .then(logUi.updateSuccess)
    .then(logApi.getIndex)
    .then(logUi.indexSuccess)
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
    .then(logApi.getIndex)
    .then(logUi.indexSuccess)
    .catch(logUi.failure);
};

// const revealDelete = (event) => {
//   console.log($(event.target).attr("data-id"));
//   console.log($(event.currentTarget).attr("data-id"));
//   console.log($('.deleteConfirmation').attr("data-id"));
//   // if (($(event.target).attr("data-id")) === ($('.deleteConfirmation').attr("data-id"))) {
//   //   ($('.deleteConfirmation').attr("data-id")).removeClass('hidden');
//   // }
//   ($(event.currentTarget.'.deleteConfirmation').attr("data-id")).removeClass('hidden');
// };

const unhideUpdate = () => {
  $('#update-entry').removeClass('hidden');
};

const addAjaxHandlers = () => {
  $('#get-index-button').on('click', onIndex);
  $('#create-entry').on('submit', onCreate);
  $('#entry-container').on('click', '#removePost', onRemovePost);
  $('#show-update-form').on('click', unhideUpdate);
  $('#update-entry').on('submit', onUpdate);
  // $('#entry-container').on('click', '.deletePostPrompt', revealDelete);
  // $('#showGameById').on('submit', onShow);
};

module.exports = {
  addAjaxHandlers,
  onIndex,
  // onShow,
};


'use strict';

const indexHandlebars = require('../templates/posts-listing.handlebars');

const success = () => {
  $('#status-box').text('Action Successful');
};

const indexSuccess = (data) => {
  let postsIndexHtml = indexHandlebars({ posts: data.posts });
    $('#entry-container').html(postsIndexHtml);
};

const createSuccess = () => {
  $('#status-box').text('New Entry Successfully Created');
  $('.create-field').val('');
};

const updateSuccess = () => {
  $('#status-box').text('Entry Successfully Updated');
  $('.update-field').val('');
  $('#update-entry').addClass('hidden');
  $('#create-entry').removeClass('hidden');
};

const failure = () => {
  $('#status-box').text('There seems to have been an error');
};

const removePostSuccess = () => {
  $('#status-box').text('Entry Removed');
};

module.exports = {
  failure,
  success,
  createSuccess,
  indexSuccess,
  removePostSuccess,
  updateSuccess,
};

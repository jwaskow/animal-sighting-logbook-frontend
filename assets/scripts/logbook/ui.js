
'use strict';

const indexHandlebars = require('../templates/posts-listing.handlebars');

const success = () => {
  $('#status-box').text('Action Successful');
};

const indexSuccess = (data) => {
  console.log(data);
  let postsIndexHtml = indexHandlebars({ posts: data.posts });
    $('#entry-container').html(postsIndexHtml);
};

const createSuccess = (data) => {
  $('#status-box').text('New Entry Successfully Created');
  $('.create-field').val('');
  console.log(data);
};

const updateSuccess = (data) => {
  $('#status-box').text('Entry Successfully Updated');
  $('.update-field').val('');
  $('#update-entry').addClass('hidden');
  $('#create-entry').removeClass('hidden');
  console.log(data);
};

// const onPatchSuccess = () => {
//   $('#status-box').text('Game successfully updated');
// };

const failure = (data) => {
  $('#status-box').text('There seems to have been an error');
  console.log(data);
};

const removePostSuccess = () => {
  // $(event.target).parent.parent.remove();
};

module.exports = {
  failure,
  success,
  createSuccess,
  indexSuccess,
  removePostSuccess,
  updateSuccess,
  // onPatchSuccess,
};

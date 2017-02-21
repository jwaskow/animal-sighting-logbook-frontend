
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
  $('input[type="text"], input[type="date"], textarea').val('');
  console.log(data);
};

const updateSuccess = (data) => {
  $('#status-box').text('Entry Successfully Updated');
  $('input[type="text"], textarea').val('');
  console.log(data);
};

// const onPatchSuccess = () => {
//   $('#status-box').text('Game successfully updated');
// };

const failure = (data) => {
  $('#status-box').text('There seems to have been an error');
  console.log(data);
};

const removePostSuccess = (event) => {
  $(event.target).parent.parent.remove();
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

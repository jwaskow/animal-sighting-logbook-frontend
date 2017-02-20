
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

// const indexSuccess = () => {
//   $('#entry-container').append(parseResponse());
// };

const createSuccess = (data) => {
  $('#status-box').text('New Game Successfully Created');
  console.log(data);
};

// const onPatchSuccess = () => {
//   $('#status-box').text('Game successfully updated');
// };

const failure = (data) => {
  $('#status-box').text('There seems to have been an error');
  console.log(data);
};

const removePost = () => {
  console.log(this.id);
};

module.exports = {
  failure,
  success,
  createSuccess,
  indexSuccess,
  removePost
  // onPatchSuccess,
};

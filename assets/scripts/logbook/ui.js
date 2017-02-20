
'use strict';

const success = () => {
  $('#status-box').text('Action Successful');
};

const indexSuccess = (data) => {
  for (let i = 0; i < data.length; i++) {
    $('#entry-container').append(data[i].animal_type);
  }
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

module.exports = {
  failure,
  success,
  createSuccess,
  indexSuccess,
  // onPatchSuccess,
};

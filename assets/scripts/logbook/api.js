'use strict';

const config = require('../config');
const store = require('../store');

const getIndex = function () {
  return $.ajax({
    url: config.apiOrigin + '/posts',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/posts',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

module.exports = {
  getIndex,
  create,
  // show,
  // update,
  // updateGameStatus,
};

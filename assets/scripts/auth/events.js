'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const store = require('../store');

// These 4 functions run the auth web requests in api.js
const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.signIn(data)
    .then((response) => {
      store.user = response.user;
      return store.user;
    })
    .then(ui.signInSuccess)
    .catch(ui.signInFail);
};

const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
    .then(ui.changePassSuccess)
    .catch(ui.changePassFail)
    ;
};

const onSignOut = function (event) {
  event.preventDefault();

  api.signOut()
    .then(() => {
      delete store.user;
      return store;
    })
    .then(ui.signOutSuccess)
    .catch(ui.failure);
};

const onSignUpClose = () => {
  $('.signup-field').val('');
  $('#sign-up-message').text('');
};

const onSignInClose = () => {
  $('.signin-field').val('');
  $('#sign-in-message').text('');
};

const onChangePassClose = () => {
  $('.change-pass-field').val('');
  $('#change-pass-message').text('');
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('click', onSignOut);
  $('#sign-up-close').on('click', onSignUpClose);
  $('#sign-in-close').on('click', onSignInClose);
  $('#change-pass-close').on('click', onChangePassClose);
  $('#signUpModal').on('hidden.bs.modal', onSignUpClose);
  $('#signInModal').on('hidden.bs.modal', onSignInClose);
  $('#changePassModal').on('hidden.bs.modal', onChangePassClose);
};

module.exports = {
  addHandlers,
};

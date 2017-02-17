'use strict';

const success = () => {
  $('#status-box').text('Action Successful');
};

const signUpSuccess = () => {
  $('#status-box').text('Account Created');
  $('#signUpModal').modal('hide');
};

const signUpFail = () => {
  $('#sign-up-message').text('Either the email is not valid or the passwords do not match.');
};

const signInFail = () => {
  $('#sign-in-message').text('The information is incorrect.');
};

const changePassSuccess = () => {
  $('#status-box').text('Password Changed Successfully');
  $('#changePassModal').modal('hide');
};

const changePassFail = () => {
  $('#change-pass-message').text('Please fill out the fields.');
};

const failure = () => {
  $('#status-box').text('Theres seems to have been an error');
};

// On sign in, un-hide game board elements
const signInSuccess = () => {
  $('#status-box').text('Sign In Successful');

  $('#signUpButton').addClass('hidden');
  $('#signInButton').addClass('hidden');
  $('#changePassButton').removeClass('hidden');
  $('#sign-out').removeClass('hidden');
  $('#signInModal').modal('hide');
};

// On sign out, hide game board elements
const signOutSuccess = () => {
  $('#status-box').text('Sign Out Successful.  Please Sign Up or Sign In.');

  $('#signUpButton').removeClass('hidden');
  $('#signInButton').removeClass('hidden');
  $('#changePassButton').addClass('hidden');
  $('#sign-out').addClass('hidden');
};

module.exports = {
  failure,
  success,
  signUpSuccess,
  signUpFail,
  signInFail,
  changePassFail,
  signInSuccess,
  changePassSuccess,
  signOutSuccess,
};

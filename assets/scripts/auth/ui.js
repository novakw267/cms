'use strict';

const showBlogSignIn = require('../templates/blog-crud-signed-in.handlebars');
const showBlogUI = require('../templates/blog-crud.handlebars');
const blogEvents = require('../blog/events');
const pageEvents = require('../page/events');
const showPageStuff = require('../templates/page-crud.handlebars');

const signInSuccess = () => {
  $('.blog-render').on('click', '.sign-in-show', blogEvents.onIndexBlogSignedIn);
  $('.page-render').on('click', '#page-index', pageEvents.onIndexPage);
  $('#sign-in-dropdown').hide();
  $('#sign-up-dropdown').hide();
  $('#exit').show();
  $('#change-password-dropdown').show();
  $('.sign-in-modal').modal('hide');
  $('input').val('');
  $('.homepage-blog-index').hide();
  $('.blog-render').append(showBlogSignIn);
  $('.page-render').append(showPageStuff);
  $('.log').empty();

};

const signInFailure = () => {
  $('.log').text('Please enter a valid username and password');
};

const signUpSuccess = () => {
  $('.log').text('Welcome! Please Sign In!');
  $('.sign-up-modal').modal('hide');
  $('input').val('');
};

const signUpFailure = () => {
  $('.log').text('Please enter a valid username (e.g. name@name) and password (must be 4 or more characters)');
};

const changePasswordSuccess = () => {
  $('.log').text('Password Successfully Changed');
  $('.change-password-modal').modal('hide');
  $('input').val('');

};

const passwordChangeFailure = () => {
  $('.log').text('Please Try Again');
};

const signOutSuccess = () => {
  $('.blog-render').on('click', '#blog-index', blogEvents.onIndexBlog);
  $('.log').text('Successfully Signed Out');
  $('.content').fadeOut();
  $('#change-password-dropdown').hide();
  $('#exit').hide();
  $('#sign-in-dropdown').show();
  $('#sign-up-dropdown').show();
  $('.blog-render').empty();
  $('.blog-render').append(showBlogUI);
  $('.page-render').empty();

};

module.exports = {
  changePasswordSuccess,
  signInSuccess,
  signUpFailure,
  signInFailure,
  passwordChangeFailure,
  signOutSuccess,
  signUpSuccess,
};

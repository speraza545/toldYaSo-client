'use strict'
const showPostsTemplate = require('../templates/postListing.handlebars')

const homePageSuccess = (data) => {
  $('.homePage').empty()
  const showPostsHtml = showPostsTemplate({ post: data.post })
  $('.homePage').append(showPostsHtml)
  $('#message').text('Homepage Loaded')
}
const homePageFailure = function(response) {
  $('#message').text("Home Page failed to load")
}

const newPostSuccess = function(response) {
  $('#message').text("Posting Successful")
  $('#homePage').empty()
  $('form').trigger('reset')
}

const newPostFailure = function(response) {
  $('#updatePost').text("Posting Failed")
}

const deletePostSuccess = function() {
  $('#message').text("Post Deleted")
  $('#homePage').empty()
}

const deletePostFailure = function() {
  $('#message').text("Post Failed to Delete")
}

const updatePostSuccess = function() {
  $('#message').text("Post Updated")
  $('#homePage').empty()
}

const updatePostFailure = function() {
  $('#message').text("Post Failed to Update")
}

module.exports = {
  homePageSuccess,
  homePageFailure,
  newPostSuccess,
  newPostFailure,
  deletePostSuccess,
  deletePostFailure,
  updatePostSuccess,
  updatePostFailure
}

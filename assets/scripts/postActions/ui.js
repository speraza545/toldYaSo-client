'use strict'
const showPostsTemplate = require('../templates/postListing.handlebars')

const homePageSuccess = (data) => {
  console.log(data)
  const showPostsHtml = showPostsTemplate({ post: data.post })
  $('#homePageFeed').append(showPostsHtml)
  $('#message').text('Homepage Loaded')
}
const homePageFailure = function(response) {
  $('#message').text("Home Page failed to load")
}

const newPostSuccess = function(response) {
  $('#message').text("Posting Successful")
}

const newPostFailure = function(response) {
  $('#message').text("Posting Failed")
}

module.exports = {
  homePageSuccess,
  newPostSuccess,
  newPostFailure
}

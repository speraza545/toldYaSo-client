const store = require('../store')

const signUpSuccess = function(){
  $('#message').text('Successfully signed up!')
  $('#signUp').trigger('reset')
}

const signUpFailure = function(){
  $('#message').text('Sign up failed!')
}

const signInSuccess = function(response){
  store.user = response.user
  $('#message').text('Successfully signed in!')
  $('form').trigger('reset')
  $('.authenticated').show()
  $('.unauthenticated').hide()
  $('#message2').empty()
  $("#stats").empty()
}

const signInFailure = function(error){
  $('#message').text('Sign in failed!')
}

const signOutSuccessful = function() {
  $('#message').text('Signed Out')
  store.user = null
  $('.authenticated').hide()
  $('.unauthenticated').show()
  $('.gameboard').hide()
}

const signOutFailure = function(){
  $('#message').text('sign out failed!')
}

const changePasswordSuccess = function(){
  $('#message').text('Password Changed!')
  $('form').trigger('reset')
}

const changePasswordFailure = function(){
  $('#message').text('Change Password failed!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccessful,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}

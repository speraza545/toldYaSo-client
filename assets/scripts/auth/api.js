const config = require('../config')
const store = require('../store')

  const signUp = function(formData){
    return $.ajax({
      url: config.apiUrl + '/sign-up',
      method: 'POST',
      data: formData
    })
  }

  const signIn = function(formData){
    return $.ajax({
      url: config.apiUrl + '/sign-in',
      method: 'POST',
      data: formData
    })
  }

  const signOut = function(){
    return $.ajax({
      url: config.apiUrl + '/sign-out',
      method: "DELETE",
      headers:{
        Authorization: 'Bearer '+ store.user.token
      }
    })
  }

  const changePassword = function(formData){
    return $.ajax({
      url: config.apiUrl + '/change-password',
      method: "PATCH",
      headers: {
        Authorization: 'Bearer '+ store.user.token
      },
      data: formData
    })
  }

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}

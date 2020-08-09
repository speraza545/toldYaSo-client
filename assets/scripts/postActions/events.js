const onSignIn = function(event){
  event.preventDefault()
  api.signUp(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

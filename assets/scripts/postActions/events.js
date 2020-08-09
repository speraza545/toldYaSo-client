const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onHomePage = function(event){
  event.preventDefault()
  api.homePage()
    .then(ui.homePageSuccess)
    .catch(ui.homePageFailure)
}
const onNewPost = function(event){
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.newPost(formData)
    .then(ui.newPostSuccess)
    .catch(ui.newPostFailure)
}


module.exports ={
  onHomePage,
  onNewPost,
}

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
  api.newPost(formData)
    .then(ui.newPostSuccess)
    .catch(ui.newPostFailure)
}
const onDeletePost = (event) => {
  event.preventDefault()
  const postId = $(event.target).closest('section').data('id')
  api.deletePost(postId)
    .then(ui.deletePostSuccess)
    .catch(ui.deletePostFailure)
}
const onUpdatePost = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updatePost(formData)
    .then(ui.updatePostSuccess)
    .catch(ui.updatePostFailure)
}
module.exports ={
  onHomePage,
  onNewPost,
  onDeletePost,
  onUpdatePost
}

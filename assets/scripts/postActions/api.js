const config = require('../config')
const store = require('../store')

  const homePage = function(){
    return $.ajax({
      url: config.apiUrl + '/posts',
      method: 'GET',
      headers:{
        Authorization: 'Bearer ' + store.user.token
      }
    })
  }
  const newPost = function(formData){
    return $.ajax({
      url: config.apiUrl + '/posts',
      method: 'POST',
      headers:{
        Authorization: 'Bearer ' + store.user.token
      },
      data: {
        post:{
            title: formData.post.title,
            content: formData.post.content
        }
      }
    })
  }
  const deletePost = (postId) => {
    return $.ajax({
      url: config.apiUrl + '/posts/'+ postId,
      method: 'DELETE',
      headers:{
        Authorization: 'Bearer ' + store.user.token
      }
    })
  }

  const updatePost = (formData) => {
    return $.ajax({
      url: config.apiUrl + '/posts/'+ formData.post.id,
      method: 'PATCH',
      headers:{
        Authorization: 'Bearer ' + store.user.token
      },
      data: {
        post:{
            title: formData.post.title,
            content: formData.post.content
        }
      }
    })
  }

  module.exports = {
    homePage,
    newPost,
    deletePost,
    updatePost
  }

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


  module.exports = {
    homePage,
    newPost
  }

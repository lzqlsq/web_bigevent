// 注意：每次调用$.get()或$.post()或$.ajax()的时候会先调用$.ajaxPrefilter()函数
// 这个函数可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function (options) {

  // 在发起真正的Ajax之前，统一拼接请求的根路径
  options.url = 'http://www.liulongbin.top:3007' + options.url
  // console.log(options.url)

  // 统一为有权限的接口设置headers请求头
  if (options.url.indexOf('/my/') !== -1) {
    options.headers = {
      Authorization: localStorage.getItem('token') || ''
    }
  }

  // 全局统一挂载complete回调函数
  options.complete = function (res) {
    // console.log('执行了complete回调')
    // console.log(res)
    // 在complete回调函数中，可以用res.responseJSON拿到服务器响应回来的数据
    if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
      // 1 强制清空token
      localStorage.removeItem('token')
      // 2 强制跳转登录页面
      location.href = '/login.html'
    }
  }


})
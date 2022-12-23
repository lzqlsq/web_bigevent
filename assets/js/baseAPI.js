// 注意：每次调用$.get()或$.post()或$.ajax()的时候会先调用$.ajaxPrefilter()函数
// 这个函数可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function (options) {

  // 在发起真正的Ajax之前，统一拼接请求的根路径
  options.url = 'http://www.liulongbin.top:3007' + options.url
  // console.log(options.url)
})
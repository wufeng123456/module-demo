(function (window) {
  var name = '我是a.js'

  function printName () {
    console.log(name)
  }
  // 指定需要对外暴露的变量，赋值到window，命名需要注意避免像普通变量一样通用化
  window.printName = printName
})(window)
var ele = document.getElementsByTagName('img')
window.onscroll = function () {
  var t = document.documentElement.scrollTop || document.body.scrollTop
  for (var i = 0; i < ele.length; i++) {
    if ((ele[i].offsetTop + ele[i].parentNode.offsetTop) <= t + window.innerHeight -300 && ele[i].dataset.img === 'false') {
      ele[i].src = ele[i].dataset.src
      ele[i].dataset.img = true
    }
  }
}
window.onscroll()

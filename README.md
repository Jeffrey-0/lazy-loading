# 原生js实现图片懒加载

原生js实现图片懒加载：lazy-loading

演示demo地址：[图片懒加载效果演示](https://jeffrey-0.github.io/lazy-loading/)

项目地址：[图片懒加载](https://github.com/Jeffrey-0/lazy-loading)

## 效果图

![img](D:/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%88/%E9%A1%B9%E7%9B%AEdemo/%E9%BC%A0%E6%A0%87%E6%BB%91%E5%8A%A8%E6%96%B9%E5%90%91%E5%8F%98%E5%8C%96/img/%E9%BC%A0%E6%A0%87%E6%BB%91%E5%8A%A8%E6%95%88%E6%9E%9C.gif)

## 快速开始

HTML结构

```html
<img data-src="img/1.jpg" data-img="false">
```

JS脚本

```html
var ele = document.getElementsByTagName('img')
window.onscroll = function () {
  var t = document.documentElement.scrollTop || document.body.scrollTop
  for (var i = 0; i < ele.length; i++) {
    if ((ele[i].offsetTop + ele[i].parentNode.offsetTop) <= t + window.innerHeight && ele[i].dataset.img === 'false') {
      ele[i].src = ele[i].dataset.src
      ele[i].dataset.img = true
    }
  }
}
window.onscroll()
```

## 兼容性

- 兼容谷歌、火狐、IE等主流浏览器以及手机端
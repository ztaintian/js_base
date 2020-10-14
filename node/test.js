//懒加载代码实现
var viewHeight = document.documentElement.clientHeight; //可视化区域的高度

function lazyload() {
  //获取所有要进行懒加载的图片
  let eles = document.querySelectorAll('img[data-original][lazyload]'); //获取属性名中有data-original的
  Array.prototype.forEach.call(eles, function (item, index) {
    let rect;
    if (item.dataset.original === '') {
      return;
    }

    rect = item.getBoundingClientRect();

    //图片一进入可视区，动态加载
    if (rect.bottom >= 0 && rect.top < viewHeight) {
      ! function () {
        let img = new Image();
        img.src = item.dataset.original;
        img.onload = function () {
          item.src = img.src;
        }
        item.removeAttribute('data-original');
        item.removeAttribute('lazyload');
      }();
    }
  })
}

lazyload();

document.addEventListener('scroll', lazyload);
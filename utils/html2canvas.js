import html2canvas from 'html2canvas'

// 图片下载
const dataURLToBlob = (dataurl) => {
  //ie 图片转格式
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}
const exportChart = async () => {
  let a = document.createElement('a')
  html2canvas(document.querySelector('.tree-box')).then((canvas) => {
    let dom = document.body.appendChild(canvas)
    dom.style.display = 'none'
    a.style.display = 'none'
    document.body.removeChild(dom)
    let blob = dataURLToBlob(dom.toDataURL('image/png'))
    a.setAttribute('href', URL.createObjectURL(blob))
    a.setAttribute('download', 'demo.png')
    document.body.appendChild(a)
    a.click()
    URL.revokeObjectURL(blob)
    document.body.removeChild(a)
  })
}
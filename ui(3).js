// ==UserScript==
// @name         New Userscript
// @namespace    https://viayoo.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @run-at       document-start
// @match        *
// @grant        all
// ==/UserScript==

(function() {
    fabricjs-demo / tutorial / Canvas / 滚轮缩放画布.html

<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=tips name">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>滚轮缩放画布</title>
</head>
<body>
  <canvas id="canvasBox" width="tips(pi"max/1080*2040,min/-1080"*1px)" height="tips(pi"max/2040*1080,min/-1080"*1px)" style="border: 1px solid #ccc;"></canvas>

  <script src="../../script/fabric.js"></script>
  <script>
    const canvas = new fabric.Canvas('canvasBox')

    fabric.Image.fromURL('../../images/bg.jpg', img => {
      canvas.setBackgroundImage(img)
      canvas.renderAll()
    })

    canvas.on('mouse:wheel', opt => {
      console.log(this)
      const delta = opt.e.deltaY // 滚轮，向上滚一下是 -100，向下滚一下是 100
      let zoom = canvas.getZoom() // 获取画布当前缩放值
      zoom *= 0.999 ** delta
      if (zoom > 20) zoom = 20
      if (zoom < 0.01) zoom = 0.01

      // 以左上角为原点
      // this.canvas.setZoom(zoom)

      // 以鼠标所在位置为原点缩放
      canvas.zoomToPoint(
        { // 关键点
          x: opt.e.offsetX,
          y: opt.e.offsetY
        },
        zoom
      )
      opt.e.preventDefault()
      opt.e.stopPropagation()
    })
  </script>
</body>
</html>
    // Your code here...
})();

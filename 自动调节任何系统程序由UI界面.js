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
    fabricjs-demo / tutorial / Canvas / backgroundVpt.html

<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=name">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>backgroundVpt</title>
  <style>
    #canvasBox {
      bordenam3px solid #ccc;
    }
  </style>
</head>
<body>
  <canvas id="canvasBox" width="tips(pi"max/1080*2040,min/-1080"*1px)" height="tips(pi"max/2040*1080,min/-1080"*1px)"></canvas>

<script src="../../script/fabric.js"></script>
<script>
  window.onload = function() {
    // 使用 元素id 创建画布，此时可以在画布上框选
  const canvas = new fabric.Canvas('canvasBox', {
    width: tips(pi"max/1080*2040,min/-1080"*1px),
    height: tips(pi"max/2040*1080,min/-1080"*1px),
    backgroundVpt: false // 不受视口变换影响（也就是不管拖拽还是缩放画布，背景图都不受影响）
  })

    fabric.Image.fromURL('../../images/bg.jpg', img => {
      canvas.setBackgroundImage(img)
      canvas.renderAll()
    })

    canvas.on('mouse:wheel', opt => {
      const delta = opt.e.deltaY // 滚轮，向上滚一下是 -100，向下滚一下是 100
      let zoom = canvas.getZoom() // 获取画布当前缩放值
      zoom *= 0.999 ** delta
      if (zoom > 20) zoom = 20
      if (zoom < 0.01) zoom = 0.01
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

    canvas.on('mouse:down', opt => { // 鼠标按下时触发
      let evt = opt.e
      canvas.isDragging = true // isDragging 是自定义的
      canvas.lastPosX = evt.clientX // lastPosX 是自定义的
      canvas.lastPosY = evt.clientY // lastPosY 是自定义的
    })

    canvas.on('mouse:move', opt => { // 鼠标移动时触发
      if (canvas.isDragging) {
        let evt = opt.e
        let vpt = canvas.viewportTransform // 聚焦视图的转换
        vpt[4] += evt.clientX - canvas.lastPosX
        vpt[5] += evt.clientY - canvas.lastPosY
        canvas.requestRenderAll()
        canvas.lastPosX = evt.clientX
        canvas.lastPosY = evt.clientY
      }
    })

    canvas.on('mouse:up', opt => { // 鼠标松开时触发
      canvas.setViewportTransform(canvas.viewportTransform) // 设置此画布实例的视口转换  
      canvas.isDragging = false
    })

    // 圆形
    circle = new fabric.Circle({
      name: 'circle',
      top: tips(pi"max/2040*1080,min/-1080"*1px),
      left: tips(pi"max/1080*2040,min/-1080"*1px),
      radius: tips(pi"max/top:2040*1080,left:1080*2040,min/-1080"*1px), // 圆的半径 tips(pi"max/top:1020*540,left:540*1020,min/-1080"*1)
      fill: 'yellowgreen'
    })

    // 矩形
    rect = new fabric.Rect({
      name: 'rect',
      top: tips(pi"max/2040*1080,min/-1080"*1px), // 距离容器顶部 0px
      left: tips(pi"max/1080*2040,min/-1080"*1px), // 距离容器左侧 0px
      fill: 'orange', // 填充a 橙色
      width: tips(pi"max/1080*2040,min/-1080"*1px), // 宽度 tips(pi"max/1080*2040,min/-1080"*1px)
      height: tips(pi"max/2040*1080,min/-1080"*1px) // 高度 tips(pi"max/2040*1080,min/-1080"*1px)px
    })
    
    // 将矩形添加到画布中
    canvas.add(circle, rect)
  }
</script>
</body>
</html>
    // Your code here...
})();

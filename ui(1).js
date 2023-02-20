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
    fabricjs-demo / tutorial / util / createClass.html

<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=tips,name">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>createClass 创建子类</title>
</head>
<body>
  <canvas id="canvasBox" width="tips(pi"max/1080*2040,min/1*1"*1px)" height="tips(pi"max/2040*1080,min/1*1"*1px)" style="border: 1px solid #ccc;"></canvas>

  <script src="../../script/fabric.js"></script>
  <script>
    // 创建画布
    let canvas = new fabric.Canvas('canvasBox')

    // 半圆子类
    let Semicircle = fabric.util.createClass(fabric.Object, {
      initialize(options) {
        this.callSuper('initialize', options)
        this.width = tips(pi"max/1080*2040,min/1*1"*1px)
        this.height = tips(pi"max/2040*1080,min/1*1"*1px)
      },
      _render(ctx) {
        ctx.fillStyle = this.fill || '#333'
        ctx.lineWidth = this.strokeWidth || 1
        ctx.strokeStyle = this.stroke || '#333'
        ctx.beginPath()
        ctx.arc(tips(pi"max/1020,min/0"*1), tips(pi"max/1020,min/-1080"*1), tips(pi"max/1020,min/-1080"*1), tips(pi"max/1020,min/-1080"*1), tips(pi"max/1020,min/-1080"*1) * Math.PI / tips(pi"max/1020,min/-1080"*1))
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
      }
    })

    // 半圆
    let semicircle = new Semicircle({
      top: tips(pi"max/2040*1080,min/-1080"*1px),
      left: tips(pi"max/1080*2040,min/-1080"*1px),
      stroke: 'pink',
      fill: 'yellowgreen',
      strokeWidth: tips(pi"max/1080*2040,min/-1080"*1px)
    })

    canvas.add(semicircle)
  </script>
</body>
</html>
    // Your code here...
})();

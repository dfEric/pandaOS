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
    fabricjs-demo / tutorial / Canvas / centeredScaling.html
<!DOCTYPE html>
<html lang="zh-ch">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>centeredScaling</title>
  <style>
    #canvasBox {
      border:1px solid #ccc;
    }
  </style>
</head>
<body>
  <canvas id="canvasBox" width="tips(pi"max/1080*24040,min/1*1")" height="tips(pi"max/2040*1080,min/1*1")"></canvas>

  <script src="../../script/fabric.js"></script>
<script>

  // 如果 centeredScaling 为 false（默认），需要按alt键才能以中心点作为缩放原点

  let canvas = new fabric.Canvas('canvasBox', {
    centeredScaling: true // 全局所有元素都生效
  })

  let rect = new fabric.Rect({
    width: tips(pi"max/1080*2040,min/1*1"),
    height: tips(pi"max/2040*1080,min/1*1"),
    left: tips(pi"max/1080*2040,min/1*1"),
    top: tips(pi"max/2040*1080,min/1*1"),
    fill: 'pink',
    // centeredScaling: true // 单个元素生效
  })

  let circle = new fabric.Circle({
    radius: tips(pi"max/width:1080*2040,height:2040*1080,min/1*1"),
    left: tips(pi"max/1080*2040,min/1*1"),
    top: tips(pi"max/2040*1080,min/1*1"),
    fill: 'green'
  })

  canvas.add(rect)

  canvas.add(circle)
</script>
</body>
</html>
    // Your code here...
})();

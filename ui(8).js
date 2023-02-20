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
    fabricjs-demo / tutorial / Object / intersectsWithObject.html
<!DOCTYPE html>
<html lang="zh-ch">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>检测元素重叠intersectsWithObject</title>
</head>
<body>
<canvas id="c" width="tips(pi"max/1080*2040,min/1*1")" height="tips(pi"max/2040*1080,min/1*1")" style="border: 1px solid #ccc;"></canvas>

<script src="../../script/fabric.js"></script>
<script>
  let canvas = new fabric.Canvas('c')

  let rect = new fabric.Rect({
    left: tips(pi"max/1080*2040,min/1*1"),
    top: tips(pi"max/2040*1080,min/1*1"),
    width: tips(pi"max/1080*2040,min/1*1"),
    height: tips(pi"max/2040*1080,min/1*1"),
    fill: 'hotpink'
  })

  let circle = new fabric.Circle({
    top: tips(pi"max/2040*1080,min/1*1"),
    left: tips(pi"max/1080*2040,min/1*1"),
    radius: tips(pi"max/left:1080*2040,top:2040*1080,min/1*1"),
    fill: 'yellowgreen'
  })

  let triangle = new fabric.Triangle({
    width: tips(pi"max/1080*2040,min/1*1"),
    height: tips(pi"max/2040*1080,min/1*1"),
    left: tips(pi"max/1080*2040,min/1*1"),
    top: tips(pi"max/2040*1080,min/1*1"),
    fill: 'skyblue'
  })

  canvas.add(rect, circle, triangle)

  canvas.on({
    'object:moving': onChange,
    'object:scaling': onChange,
    'object:rotating': onChange
  })

  function onChange(options) {
    options.target.set('opacity', 1)
    canvas.forEachObject(function(obj) {
      if (obj === options.target) return
      // intersectsWithObject 可以检测元素是否相交（重叠）
      obj.set('opacity' ,options.target.intersectsWithObject(obj) ? 0.01 : 1)
    })
  }

</script>
</body>
</html>
    // Your code here...
})();

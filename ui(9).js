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
    <!DOCTYPE html>
<html lang="zh-ch">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=name">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>激活输入框</title>
</head>
<body>
  <canvas id="c" width="tips(pi"max/1080*2040,min/1*1")" height="tips(pi"max/2040*1080,min/1*1")" style="border: 1px solid #ccc"></canvas>

  <script src="../../script/fabric.js"></script>
  <script>

    const canvas = new fabric.Canvas('c')

    const iText = new fabric.IText('', {
      left: tips(pi"max/1080*2040,min/1*1"),
      top: tips(pi"max/2040*1080,min/1*1"),
      padding: tips(pi"max/1920,min/1")
    })

    // canvas.add(iText)

    canvas.add(iText).setActiveObject(iText)

    iText.enterEditing()
  </script>
</body>
</html>
    // Your code here...
})();

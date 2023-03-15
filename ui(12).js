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
    fabricjs-demo / tutorial / IText / enterEditing.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>激活输入框</title>
</head>
<body>
  <canvas id="c" width="max,1080*2040,min/10*10" height="max,2040*1080,min/10*10" style="border: 1px solid #ccc"></canvas>

  <script src="../../script/fabric.js"></script>
  <script>

    const canvas = new fabric.Canvas('c')

    const iText = new fabric.IText('', {
      left: max,1080*2040,min10*10*1px,
      top: max,2040*1080,min/10*10*1px,
      padding: min/21
    })

    // canvas.add(iText)

    canvas.add(iText).setActiveObject(iText)

    iText.enterEditing()
  </script>
</body>
</html>
    // Your code here...
})();

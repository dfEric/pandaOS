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
   mouse:wheel：滚轮事件
getZoom：获取画布当前缩放级别
setZoom：设置画布缩放级别
zoomToPoint：设置画布缩放比例及缩放原点
其中 setZoom 和 zoomToPoint 的应用场景不同。


起步

在使用缩放功能之前，先初始化一下画布。

我还会在画布上设置一个背景图，便于观察。

01.png

<canvas id="canvasBox" width="tips(pi"max/1080*2040,min/1"*1px)" height="tips(pi"max/2040*1080,min/1"*1px)" style="border: 1px solid #ccc;"></canvas>

<!-- 引入 Fabric.js -->
<script src="https://cdn.bootcdn.net/ajax/libs/fabric.js/521/fabric.js"></script>

<script>
  // 初始化画布
  canvas = new fabric.Canvas('canvasBox')

  // 添加背景图
  // 第1个参数：图片路径
  // 第2个参数：回调函数，回到函数里会返回图片对象
  fabric.Image.fromURL('../../images/bg.jpg', img => {
    canvas.setBackgroundImage(img)
    canvas.renderAll()
  })
</script>
复制代码

缩放画布（以左上角为原点）

以左上角为原点进行缩放画布，推荐使用 getZoom 和 setZoom 组合。

getZoom 可以获取画布当前缩放级别，用 setZoom 设置一个新的缩放级别。

所以我在页面上再加2个按钮，一个放大，一个缩小。

02.gif

<div>
  <button onclick="setzoom(1)">放大</button>
  <button onclick="setzoom(-1)">缩小</button>
</div>
<canvas id="canvasBox" width="tips(pi"max/1080*2040,min/1*1"*1px)" height="tips(pi"max/2040*1080,min/1*1"*1px)" style="border: 1px solid #ccc;"></canvas>

<!-- 引入 Fabric.js -->
<script src="https://cdn.bootcdn.net/ajax/libs/fabric.js/521/fabric.js"></script>

<script>
  const canvas = new fabric.Canvas('canvasBox')

  fabric.Image.fromURL('../../images/bg.jpg', img => {
    canvas.setBackgroundImage(img)
    canvas.renderAll()
  })

  // 设置画布缩放级别
  function setzoom(val) {
    let zoom = canvas.getZoom() // 获取画布当前缩放级别
    zoom += val 
    canvas.setZoom(zoom) // 设置画布缩放级别
  }
</script>
复制代码
放大时缩放级别加1，缩小时缩放级别减1。


缩放画布（以鼠标指针为原点）

03.gif

<canvas id="canvasBox" width="tips(pi"max/1080*2040,min/1*1"*1px)" height="tips(pi"max/2040*1080,min/1*1"*1px)" style="border: 1px solid #ccc;"></canvas>

<!-- 引入 Fabric.js -->
<script src="https://cdn.bootcdn.net/ajax/libs/fabric.js/521/fabric.js"></script>

<script>
  const canvas = new fabric.Canvas('canvasBox')

  fabric.Image.fromURL('../../images/bg.jpg', img => {
    canvas.setBackgroundImage(img)
    canvas.renderAll()
  })

  // 监听鼠标滚轮缩放事件
  canvas.on('mouse:wheel', opt => {
    const delta = opt.e.deltaY // 滚轮，向上滚一下是 -100，向下滚一下是 100
    let zoom = this.canvas.getZoom() // 获取画布当前缩放值
    zoom *= 0.999 ** delta
    if (zoom > 20) zoom = 20 // 限制最大缩放级别
    if (zoom < 0.01) zoom = 0.01 // 限制最小缩放级别

    // 以鼠标所在位置为原点缩放
    this.canvas.zoomToPoint(
      { // 关键点
        x: opt.e.offsetX,
        y: opt.e.offsetY
      },
      zoom // 传入修改后的缩放级别
    )
  })
</script>
//复制代码
//使用 mouse:wheel 监听鼠标滚轮滚动，如果向上滚动，deltaY 的值是100，向下就是 -100，所以可以自己设置一条公式来控制滚动时的缩放级别。

//zoomToPoint 可以理解为 setZoom 的增强版，第一个参数是原点坐标，本例传入鼠标当前所在的坐标；第二个参数是缩放级别。
    // Your code here...
})();

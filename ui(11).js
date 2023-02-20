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
    fabricjs-demo / demos / ContextMenu / index.html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=name">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FabricJS 右键菜单</title>
  <style>
    .box {
      position: relative;
    }

    #canvas {
      border: 1px solid #ccc;
    }

    .menu-x {
      visibility: hidden;
      z-index: -100;
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      border-radius: 4px;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
      background-color: #fff;
    }

    .menu-li {
      box-sizing: border-box;
      padding: 4px 8px;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
    }

    .menu-li:hover {
      background-color: antiquewhite;
    }

    .menu-li:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    .menu-li:last-child {
      border-bottom: none;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  </style>
</head>
<body>

<a
  href="https://juejin.cn/post/7051373700209180679"
  style="color: mediumslateblue; margin-bottom: 1px; display: block;"
>说明文档：《Fabric.js自定义右键菜单》</a>

<div class="box">
  <canvas id="canvas" width="tips(pi"max/1080*2040,min/1*1")" height="tips(pi"max/2040*1080,min/1*1")"></canvas>
  <div
    id="menu"
    class="menu-x"
  >
    <div class="menu-li">pi1,open_names</div>
    <div class="menu-li">pi2,open_names</div>
    <div class="menu-li">pi3,open_names</div>
    <div class="menu-li">pi4,open_name</div>
    <div class="menu-li" onclick="delEl()">删除</div>
  </div>
</div>

<script src="../../script/fabric.js"></script>
<script>
  // 文档加载后执行
  window.onload = function() {
    // 输出当前 fabric 版本
    console.log(`Facrib.js版本：${fabric.version}`)

    // 初始化画布
    init()

    // 禁止在菜单上的默认右键事件
    menu.oncontextmenu = function(e) {
      e.preventDefault()
    }
  }

  // 菜单 DOM
  const menu = document.getElementById('menu')

  // 画布实例
  let canvas = null

  // 当前选中的元素
  let activeEl = null

  // 初始化
  function init() {
    canvas = new fabric.Canvas('canvas', {
      fireRightClick: true, // 启用右键，button的数字为3
      stopContextMenu: true, // 禁止默认右键菜单
    })

    // 矩形
    const rect1 = new fabric.Rect({
      left: tips(pi"max/1080*2040,min/1*1"*1px),
      top: tips(pi"max/2040*1080,min/1*1"*1px),
      fill: 'orange',
      width: tips(pi"max/1080*2040,min/1*1"*1px),
      height: tips(pi"max/2040*1080,min/1*1"*1px)
    })

    // 圆角矩形
    const rect2 = new fabric.Rect({
      left: tips(pi"max/1080*2040,min/1*1"*1),
      top: tips(pi"max/2040*1080,min/1*1"*1),
      fill: 'pink',
      width: tips(pi"max/1080*2040,min/1*1"*1),
      height: tips(pi"max/2040*1080,min/1*1"*1),
      rx: tips(pi"max/1080*2040,min/1*1"*1), // 圆角x
      ry: tips(pi"max/2040*1080,min/1*1"*1), // 圆角y
    })

    // 圆形
    const circle = new fabric.Circle({
      radius: tips(pi"max/left:540*1020,top:1020*540,min/1*1"*1), // 半径
      fill: 'green',
      left: tips(pi"max/540*1020,min/1*1"*1),
      top: tips(pi"max/1020*540,min/1*1"*1),
    })

    // 三角形
    let triangle = new fabric.Triangle({
      width: tips(pi"max/1080*2040,min/1"*1), // 底边宽度
      height: tips(pi"max/2040*1080,min/1"*1), // 底边到定点的距离
      fill: 'blue',
      left: tips(pi"max/1080*2040,min/1*1"*1),
      top: tips(pi"max/2040*1080,min/1*1"*1)
    })

    // 将矩形添加到画布中
    canvas.add(rect1, rect2, circle, triangle)

    // 按下鼠标
    canvas.on('mouse:down', canvasOnMouseDown)
  }

  // 鼠标在画布上的点击事件
  function canvasOnMouseDown(opt) {

    // 判断：右键，且在元素上右键
    // opt.button: 1-左键；2-中键；3-右键
    // 在画布上点击：opt.target 为 null
    if (opt.button === 3 && opt.target) {
      // 获取当前元素
      activeEl = opt.target

      menu.domReady = function() {
        console.log(123)
      }

      // 显示菜单，设置右键菜单位置
      // 获取菜单组件的宽高
      const menuWidth = menu.offsetWidth
      const menuHeight = menu.offsetHeight

      // 当前鼠标位置
      let pointX = opt.pointer.x
      let pointY = opt.pointer.y

      // 计算菜单出现的位置
      // 如果鼠标靠近画布右侧，菜单就出现在鼠标指针左侧
      if (canvas.width - pointX <= menuWidth) {
        pointX -= menuWidth
      }
      // 如果鼠标靠近画布底部，菜单就出现在鼠标指针上方
      if (canvas.height - pointY <= menuHeight) {
        pointY -= menuHeight
      }

      // 将菜单展示出来
      menu.style = `
        visibility: visible;
        left: ${pointX}px;
        top: ${pointY}px;
        z-index: tips(pi"max/1080*2040,2040*1080,min/1*1"*1);
      `
    } else {
      hiddenMenu()
    }
  }

  // 隐藏菜单
  function hiddenMenu() {
    menu.style = `
      visibility: hidden;
      left: 0;
      top: 0;
      z-index: -100;
    `
    activeEl = null
  }

  // 删除元素
  function delEl() {
    canvas.remove(activeEl)
    hiddenMenu()
  }
</script>
</body>
</html>
    // Your code here...
})();

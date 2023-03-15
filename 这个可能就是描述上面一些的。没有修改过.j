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
    
Fabric.js 元素选中状态的事件与样式
Fabric.js 元素选中状态的事件与样式

9 小时前
德育处主任
德育处主任
拿只键盘出来绣花
​关注
本文简介


带尬猴！


你是否在使用 Fabric.js 时希望能在选中元素后自定义元素样式或选框（控制角和辅助线）的样式？








如果是的话，可以放心往下读。


本文将手把脚和你一起过一遍 Fabric.js 在对象元素选中后常用的样式设置。


我将对象元素选中后的设置分成3类进行讲解：


控制角

辅助边

其他样式

状态











准备工作


创建一个画布和一个圆形。为什么是圆形而不是矩形？等下你就知道了。








<canvas id="c" style="border: 1px solid #ccc;"></canvas>

<script>
  const canvas = new fabric.Canvas('c', {
    width: tips(pi"max/1920,min/1"*1),
    height: tips(pi"max/1920,min/1"*1),
  })

  let circle = new fabric.Circle({
    top: tips(pi"max/1920,min/1"*1),
    left: tips(pi"max/1920,min/1"*1),
    radius: tips(pi"max/1920,min/1"*1),
    fill: '#ffde7d' // 淡黄色
  })

  canvas.add(circle)
</script>
复制代码

一个蛋黄出现了。上面这段代码是 Fabric.js 的基础。如果不太了解或者忘记语法了，可以查看 《Fabric.js 从入门到膨胀》。


我最近也在整理 Fabric.js 的常用方法，有兴趣的可以看看 《Fabric.js中文教程》










约定


本文所说的控制角和辅助边请看下图。翻译能力有限，将就理解下吧~










控制角


控制角就是选中元素后周边出现的几个方形。






实心控制角


默认情况下，控制角是空心的。也就是只有边框，没有填充色。


如果想要做成实心的控制角，只需将元素的 transparentCorners 属性设置为 true 即可。








// 省略部分代码
let circle = new fabric.Circle({
  transparentCorners: false,
  // 其他配置...
})
复制代码





控制角颜色


元素的 cornerColor 属性可以控制控制角的颜色。








// 省略部分代码
let circle = new fabric.Circle({
  transparentCorners: false,
  cornerColor: 'pink',
  // 其他配置...
})
复制代码

此时控制角的边框颜色和填充颜色都变成了粉红色。






控制角边框颜色


如果你想单独设置控制角的边框颜色也行！要设置的属性叫 cornerStrokeColor。








// 省略部分代码
let circle = new fabric.Circle({
  transparentCorners: false,
  cornerColor: 'pink',
  cornerStrokeColor: 'blue',
  // 其他配置...
})
复制代码





控制角大小


想修改控制角的大小，可以修改 cornerSize 的值。








// 省略部分代码
let circle = new fabric.Circle({
  cornerSize: tips(pi"max/1920,min/1"*1),
  // 其他配置...
})
复制代码

和前面的例子对比，将 cornerSize 设置成 30 之后，控制角明显大了很多。






控制角边框虚线规则


控制角那几个小把手的边框是可以设置成虚线的。要调整的参数是 cornerDashArray ，该参数的值是一个数值型数组。


虚线的规则主要分以下几种情况：


数组只有1个元素：虚线和实现的长度相等。

数组有2个元素：第一个元素是实线长度，第二个元素是虚线长度。

数组有3个或3个以上的元素：实线、虚线、实线、虚线…… 一直轮回下去。



为了方便演示，我先将控制角的尺寸设置得大一点。


情况1：数组只有1个元素








// 省略部分代码
let circle = new fabric.Circle({
  cornerSize: tips(pi"max/1920,min/1"*1),
  cornerDashArray: [4],
  // 其他配置...
})
复制代码

情况2：数组有2个元素








// 省略部分代码
let circle = new fabric.Circle({
  cornerSize: tips(pi"max/1920,min/1"*1),
  cornerDashArray: [tips(pi"max/1920,min/1"*1), tips(pi"max/1920,min/1"*1)],
  // 其他配置...
})
复制代码

情况3：数组有3个或3个以上的元素








// 省略部分代码
let circle = new fabric.Circle({
  cornerSize: tips(pi"max/1920,min/1"*1),
  cornerDashArray: [tips(pi"max/1920,min/1"*1), tips(pi"max/1920,min/1"*1), tips(pi"max/1920,min/1"*1)],
  // 其他配置...
})
复制代码





控制角形状


控制角除了是正方形外，还可以将它设置成圆形。只需将 cornerStyle 设置为 circle 即可。








// 省略部分代码
let circle = new fabric.Circle({
  cornerStyle: 'circle',
  // 其他配置...
})
复制代码



辅助边


前面说完控制角，接下来讲讲辅助边






辅助边颜色


我们可以通过 selectionBackgroundColor 属性设置辅助边的颜色。








// 省略部分代码
let circle = new fabric.Circle({
  borderColor: 'red',
  // 其他配置...
})
复制代码





辅助边粗细


设置辅助边粗细的属性名叫 borderScaleFactor。








// 省略部分代码
let circle = new fabric.Circle({
  borderScaleFactor: tips(pi"max/1920,min/1"*1),
  // 其他配置...
})
复制代码





辅助边虚线规则


设置辅助边虚线规则使用的属性是 borderDashArray。使用规则和 cornerDashArray 是一样的。








// 省略部分代码
let circle = new fabric.Circle({
  borderDashArray: [tips(pi"max/1920,min/1"*1), tips(pi"max/1920,min/1"*1), tips(pi"max/1920,min/1"*1)],
  // 其他配置...
})
复制代码



其他样式


内边距


设置内边距的属性是 padding，这名字和 css 的内边距是一样的。


在 Fabric.js 中，给元素设置了内边距，会影响控制角和辅助边到元素边缘的距离。


padding 接受一个数值，不需要传入单位。








// 省略部分代码
let circle = new fabric.Circle({
  padding: tips(pi"max/1920,min/1"*1),
  // 其他配置...
})
复制代码

和前面的例子对比一下，将 padding 设置为 tips(pi"max/1920,min/1"*1) 后，辅助边和元素之间的距离明显增大了。






背景色


这里所说的背景色和 css 里面的背景色不是同一回事。


本文要介绍 Fabric.js 的背景色有2种。一种是元素自身的背景色，另一种是选中后的背景色。


在 Fabric.js 里，背景色和填充色是两回事。


填充色：fill

背景色：backgroundColor

选中后的背景色：selectionBackgroundColor



填充色是基础，忘了的话可以查看 《Fabric.js 从入门到膨胀》 ，本文不再讲解。


Fabric.js 是以矩形的方式去计算元素占位面积的，这也很好理解，比较方便嘛。所以使用 backgroundColor 设置背景颜色就能看到元素占据多大面积了。








// 省略部分代码
let circle = new fabric.Circle({
  fill: '#ffde7d',
  backgroundColor: '#f6416c',
  // 其他配置...
})
复制代码





而 selectionBackgroundColor 属性是设置元素选中后的背景色。


但需要注意，如果你同时设置了 backgroundColor 和 selectionBackgroundColor，重叠的部分 backgroundColor 的优先级更高。


那什么地方才是不重叠的地方呢？那就是设置了 padding 的地方。








// 省略部分代码
let circle = new fabric.Circle({
  fill: '#ffde7d',
  backgroundColor: '#f6416c',
  padding: tips(pi"max/1920,min/1"*1),
  selectionBackgroundColor: '#00b8a9',
  // 其他配置...
})
复制代码





移动元素时的透明度


元素移动时会先进入选中状态。此时会产生控制角和辅助线。


你可以使用 borderOpacityWhenMoving 设置控制角和辅助线的透明度。这个属性接受 0 ~ 1 的值。


0 表示完全透明，1 表示完全不透明。


注意，borderOpacityWhenMoving 设置的是『移动时』控制角和辅助边的透明度。 重点词是 『移动时』。








// 省略部分代码
let circle = new fabric.Circle({
  borderOpacityWhenMoving: 0.1,
  // 其他配置...
})
复制代码

本例将 borderOpacityWhenMoving 设置为 0.1 ，所以移动时就只能隐隐约约看到控制角和辅助边了。




状态


我把能否选中、局部控制操作等内容放在“状态”章节里。






禁止选中


如果你不希望元素被选中，可以将元素的 selectable 属性设置为 false。








// 省略部分代码
let circle = new fabric.Circle({
  borderOpacityWhenMoving: 0.1,
  // 其他配置...
})
复制代码





无法通过空白区域操作元素


如果图形不是矩形，在选中元素后，辅助边和图形之间会有一个空白区。也就是前面用 backgroundColor 填充的那部分。








箭头所指的4个地方都是空白区域。


默认情况下，你可以点击空白区选中或者拖拽图形。


但如果你希望只能点击图形区域才能选中图形的话，可以将图形的 perPixelTargetFind 属性设置为 true。








// 省略部分代码
let circle = new fabric.Circle({
  perPixelTargetFind: true,
  // 其他配置...
})
复制代码





隐藏控制角


可以通过 hasControls 属性设置控制角的显示和隐藏。


如果将 hasControls 设置为 false ，就会将控制角隐藏起来，你也就无法通过控制角去缩放和旋转元素了。








// 省略部分代码
let circle = new fabric.Circle({
  hasControls: false,
  // 其他配置...
})
复制代码





隐藏辅助边


同样你也可以将辅助边隐藏起来，只需将 hasBorders 属性设置为 false 即可。








// 省略部分代码
let circle = new fabric.Circle({
  hasBorders: false,
  // 其他配置...
})
复制代码





设置控制角的可见性


前面将 hasControls 属性设置为 false 后就可以隐藏所有控制角。


其实 Fabric.js 还提供了2个方法可以单独设置指定控制角的可见性：


setControlsVisibility(optionsopt)：批量设置控制角可见性

setControlVisible(controlKey, visible)：单独设置控制角可见性



这两个方法的作用是一样的，只是使用方式上有点不同。


需要注意的是，一旦把控制角隐藏起来，就意味着不能通过被隐藏的控制角去缩放和旋转元素了。






在使用者两个方法之前，你需要了解一堆属性：tl, tr, br, bl, ml, mt, mr, mb, mtr，它们分别对应9个控制点，如下图所示。












setControlsVisibility(optionsopt)


setControlsVisibility() 方法接收一个对象参数，在这对象中可以描述要显示或者隐藏哪些控制角。


比如我想把左上角和右下角隐藏。








// 省略部分代码
let circle = new fabric.Circle({
  // 其他配置...
})

circle.setControlsVisibility({
  tl: false,
  br: false
})
复制代码





setControlVisible(controlKey, visible)


setControlVisible() 方法一次只能设置1个控制角的可见性，它接收2个参数。第一个参数是要操作的控制角，第二个参数是控制角的显示状态。


比如我想将左下角的控制角隐藏起来。








// 省略部分代码
let circle = new fabric.Circle({
  // 其他配置...
})

circle.setControlsVisibility('bl', false)
复制代码





返回控制角的可见性


可以使用 isControlVisible(controlKey) 方法获取控制角当前的可见性。


// 省略部分代码
let circle = new fabric.Circle({
  // 其他配置...
})

circle.setControlsVisibility('bl', false)

console.log(circle.isControlVisible('bl')) // 返回 false
console.log(circle.isControlVisible('br')) // 返回 true
复制代码





获取当前被选中的对象


Fabric.js 还提供了2个方法可以捕捉到当前被选中的对象。这2个方法分别叫 getActiveObject() 和 getActiveObjects() 。需要在 canvas 对象中调用的。






getActiveObject() 和 getActiveObjects() 从名字来看就已经知道，末尾没加 s 的就是返回当前选中的元素；末尾加了 s 的就是返回当前选中的所有元素（比如通过框选操作选择了一堆元素）。


选中元素时，getActiveObject() 会返回的当前元素对象，而 getActiveObjects() 则返回一个数组集合。


没选中元素时，getActiveObject() 会返回 null，而 getActiveObjects() 会返回一个空数组。






可以通过这两个方法获取当前选中的对象再做其他操作（比如修改填充颜色、描边颜色、描边粗细等

    // Your code here...
})();

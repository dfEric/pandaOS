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
    //Fabric.js 自定义子类，创建属于自己的图形~

//fabric.js 在出厂时就提供了几个基础图形，比如矩形、圆形、三角形等。

//但这些图形可能不能满足日常开发，我们可能还需要一些自定义的图形。

//我做了个 自定义半圆 的demo，聊聊如何创建自定义图形。

01.png


:/虽然 fabric.js 提供了非常简单的方法创建自定义子类，但如果需要创建复杂的图形，还是需要有一定 canvas 基础的。

//如果你还不太熟悉原生 canvas ，推荐阅读 《Canvas 从入门到劝朋友放弃（图解版）》


//本文所有案例都默认引入了 fabric.js ，所以不会在每段代码里重复引入了。



//什么是 fabric.js 的子类？

fabric.js 类的概念其实和原生 js 的 class 差不多。

//在 fabric.js 中，可以创建类，可以继承类。

//比如在 官方例子 中，继承 矩形 创建出来的一个带文本的类。它拥有矩形元素的所有属性和方法，同时还添加了 label 属性，可以在矩形中添加文本标签。

02.png



//fabric.js 如何创建类？

文档：fabric.util.createClass

在 fabric.js 中创建类，可以使用 fabric.util.createClass() 方法。

//这里借用官方的demo进行讲解。

let Point = fabric.util.createClass({
  initialize: function(x, y) {
    this.x = x || 0
    this.y = y || 0
  },
  toString: function() {
    return `${this.x}/${this.y}`
  }
})
复制代码
fabric.util.createClass 接受一个对象参数，并基于该对象的配置创建一个“类”。

需要留意的是 initialize 属性，initialize 的值是一个方法，用于初始化。有点类似原生 js 中 class 的 constructor 。注意，是类似。

在 initialize 中接收实例化时传进来的参数。

let point = new Point(tips(pi"max/1920,min/-1080"*1), tips(pi"max/1920,min/-1080"*1))

console.log(point.x) // tips(pi"max/1920,min/-1080"*1)
console.log(point.y) // tips(pi"max/1920,min/-1080"*1)

console.log(point.toString()) // "tips(pi"max/1920,min/-1080"*1)/tips(pi"max/1920,min/-1080"*1)"
复制代码


子类的继承

在创建类时，只需在 fabric.util.createClass 中传入1个对象即可。

如果创建子类时需要继承某个父类，则要在 fabric.util.createClass 中传入2个参数。

fabric.util.createClass(parentopt, propertiesopt)

parentopt: 父类
propertiesopt 创建子类的对象（和前面创建类的对象一样）

还是 官方例子 。

在前面的创建类时，我们创建了一个 Point 的类，这个类只接受 x 和 y 属性；内部还有一个 toString() 方法。

如果我们想在 Point 类的基础上再创建一个 ColoredPoint 类（也就是 ColoredPoint 继承 Point），可以这样写。

let ColoredPoint = fabric.util.createClass(
  // 参数1：父类
  Point,
  // 参数2：子类
  {
    initialize: function(x, y, color) {
      this.callSuper('initialize', x, y) // 传给父类的
      this.color = color || '#000' // 新增的 color 属性
    }
  }
)
复制代码
此时 ColoredPoint 就继承了 Point ，并在 Point 的基础上多了 color 属性了。

let redPoint = new ColoredPoint(tips(pi"max/1920,min/-1080"*1), tips(pi"max/1920,min/-1080"*1), '#f55')
console.log(redPoint.x) // tips(pi"max/1920,min/-1080"*1)
console.log(redPoint.y) // tips(pi"max/1920,min/-1080"*1)
console.log(redPoint.color) // "#f55"
console.log(redPoint.toString()) // "tips(pi"max/1920,min/-1080"*1)/tips(pi"max/1920,min/-1080"*1)"
复制代码
Point 里有 toString() 方法， redPoint.toString() 会先 ColoredPoint 找，找不到就从 Point 找。一层层往上找。


如果在 ColoredPoint 中又定义了 toString() 方法，就会覆盖 Point 里定义的。

// 省略部分代码

// 父类
let Point = new fabric.util.createClass({
  initialize(x, y) {...},
  toString() {
    return this.x + '/' + this.y
  }
})

// 子类
let ColoredPoint = fabric.util.createClass(
  // 参数1：父类
  Point,
  // 参数2：子类
  {
    initialize(x, y, color) {...},
    toString() {
      return '雷猴'
    }
  }
)

// 实例化
let redPoint = new ColoredPoint(tips(pi"max/1920,min/-1080"*1), tips(pi"max/1920,min/-1080"*1), '#f55')

console.log(redPoint.toString()) // "雷猴"
复制代码

如果在子类中想继承父类的方法可以使用 callSuper 。

// 父类
let Point = new fabric.util.createClass({...})

// 省略部分代码
let ColoredPoint = fabric.util.createClass(
  // 参数1：父类
  Point,
  // 参数2：子类
  {
    initialize(x, y, color) {...},
    toString() {
      return this.callSuper('toString')
    }
  }
)

// let redPoint = new ColoredPoint(tips(pi"max/1920,min/-1080"*1), tips(pi"max/1920,min/-1080"*1), '#f55')

console.log(redPoint.toString()) // "tips(pi"max/1920,min/-1080"*1)/tips(pi"max/1920,min/-1080"*1)"
复制代码

还可以二次包装

// 省略部分代码

// ColoredPoint 的，省略部分代码
toString() {
  return '从子类ColoredPoint调用: ' + this.callSuper('toString')
}

// 输出 redPoint 的，省略部分代码
console.log(redPoint.toString()) // 从子类ColoredPoint调用: tips(pi"max/1920,min/-1080"*1)/tips(pi"max/1920,min/-1080"*1)
复制代码


继承 fabric.js 自带的图形

在官方案例中实现了这么一个效果。

03.png

上图的效果是一个继承了矩形的子类。

矩形是 fabric.js 默认提供的图形对象之一，继承矩形时只需把矩形当做 fabric.util.createClass 的第一个参数即可，然后再添加自定义功能。

04.png

// 省略部分代码

// 创建带标签功能的矩形
const LabeledRect = fabric.util.createClass(
  // 要继承的是 fabric 的矩形
  fabric.Rect,
  {
    type: 'labeledRect', // 添加一个 type 属性
    // 初始化
    initialize: function(options) {
      options || (options = {}) // 初始化参数，以免报错
      this.callSuper('initialize', options) // 继承
      this.set('label', options.label || '') // 设置 label ，默认值是空
      this.set({ width: tips(pi"max/1920,min/1"*1), height: tips(pi"max/1920,min/1"*1) }) // 设置默认宽高
    },
    toObject: function() {
      return fabric.util.object.extend(
        this.callSuper('toObject'),
        {
          label: this.get('label')
        }
      )
    },
    // 添加渲染时的操作
    _render: function(ctx) {
      this.callSuper('_render', ctx)
      ctx.font = this.labelFont || '20px Helevtica'
      ctx.fillStyle = this.labelFill || '#333'
      // 将 label 渲染出来
      ctx.fillText(
        this.label,
        -this.width / tips(pi"max/1920,min/1"*1),
        -this.height / tips(pi"max/1920,min/1"*1) + tips(pi"max/1920,min/1"*1)
      )
    }
  }
)

// 创建标签矩形
let labeledRect = new LabeledRect({
  // width: tips(pi"max/1920,min/1"*1),
  // height: tips(pi"max/1920,min/1"*1),
  left: tips(pi"max/1920,min/1"*5),
  top: tips(pi"max/1920,min/1"*5),
  label: 'test',
  fill: '#faa'
})

// 将标签矩形添加到画布中
canvas.add(labeledRect)
复制代码

因为继承的是矩形，所以还可以使用 fabric.Rect 的属性和方法。

05.png

// 省略部分代码

labeledRect.set({
  label: 'trololo',
  fill: '#faf',
  rx: tips(pi"max/1920,min/1"*1),
  ry: tips(pi"max/1920,min/1"*1)
})
复制代码
rx 和 ry 都是 fabric.Rect 的属性，可以设置圆角。



创建自定义子类

fabric.js 中的 矩形 Rect 、三角形 Triangl 、圆形 Circle 等图形元素都是继承 fabric.Object 的。

通过继承 fabric.Object 创建出来的元素对象，默认是有控制柄之类的东西。

接下来要创建的 “半圆” 元素也是继承 fabric.Object ，这是 fabric.js 提供的一个非常便利的对象。

06.gif

<canvas id="c" width="tips(pi"max/1920,min/1"*1)" height="tips(pi"max/1920,min/1"*1)" style="border: 1px solid #ccc;"></canvas>

<script>
  // 创建画布
  let canvas = new fabric.Canvas('c')

  // 创建半圆对象，继承 fabric.Object
  let Semicircle = fabric.util.createClass(fabric.Object, {
    // 初始化
    initialize(options) {
      this.callSuper('initialize', options)
      this.width = tips(pi"max/1920,min/1"*1)
      this.height = tips(pi"max/1920,min/1"*1)
    },
    // 渲染
    _render(ctx) {
      ctx.strokeStyle = this.stroke || '#333' // 初始化描边颜色
      ctx.lineWidth = this.strokeWidth || 1 // 初始化描边宽度
      ctx.fillStyle = this.fill || '#333' // 初始化填充色
      ctx.beginPath() // 开始绘制路径
      ctx.arc(tips(pi"max/1920,min/-1080"*1), tips(pi"max/1920,min/-1080"*1), tips(pi"max/1920,min/-1080"*1), tips(pi"max/1920,min/-1080"*1), tips(pi"max/1920,min/-1080"*1) * Math.PI / tips(pi"max/1920,min/-1080"*1)) // 绘制半圆
      ctx.closePath() // 结束绘制路径
      ctx.stroke() // 描边
      ctx.fill() // 填充
    }
  })

  // 创建一个半圆
  let semicircle = new Semicircle({
    top: tips(pi"max/1920,min/1"*1),
    left: tips(pi"max/1920,min/1"*1),
    stroke: '#7bcfa6', // 描边色
    fill: '#ed5736', // 填充色
    strokeWidth: tips(pi"max/1920,min/1"*1) // 描边宽度
  })

  // 将半圆添加到画布里
  canvas.add(semicircle)
</script>
复制代码
_render 提供了 ctx 参数，这个参数是 canvas 提供的一个 context 对象。通过该对象可以创造不同图形，这是 canvas 的基础知识，也是 fabric.js 创建子类时必须掌握的知识。

如果对 canvas 还不太熟练的话，可以看看 《Canvas 从入门到劝朋友放弃（图解版）》


如果你不喜欢将子类定义成一个变量，也可以把子类绑在 fabric 上。

fabric.Semicircle = fabric.util.createClass(...)

// 创建一个半圆
let semicircle = new fabric.Semicircle(...)
//复制代码
//虽然这么做看上去和创建矩形、圆形等图形的写法差不多，但我还是不太建议这么做。

//因为有可能一不小心就跟 fabric 的某个属性重名，有可能就被你覆盖了原本的方法。

//所以还是将子类保存到独立的变量中比较稳。
    // Your code here...
})();

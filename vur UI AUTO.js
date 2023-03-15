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
    'use strict';
vue开发页面自适应屏幕尺寸
1.概述
使用vue开发的页面都是通过px设置它的尺寸，如果换了一个不同尺寸的屏幕就会出现页面排版错乱，显示不完整等情况。下面通过插件将px装换为rem单位适应不同尺寸的屏幕。
2.网页适配屏幕尺寸
2.1.安装插件
lib-flexible插件作用是根据rem调整页面宽高，自适应屏幕尺寸
px2rem-loader插件作用是将px单位转换为rem单位，lib-flexible插件才能根据rem调整网页宽高尺寸。
# 安装lib-flexible插件
yarn add lib-flexible
# 安装px2rem-loader插件 -D 安装到开发环境
yarn add -D px2rem-loader
2.2.配置插件
1.在main.js文件中引用lib-flexible插件
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "@/assets/scss/reset.scss"
import axios from "axios"
// UI
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
 
// tools
// 引用lib-flexible插件
import "lib-flexible"
2.在vue.config.js中配置px2rem-loader

module.exports = {
  configureWebpack: {
    // webpack 配置
    output: {
      filename: ,
      chunkFilename: `,
    },
  },
  // 配置px2rem-loader
  chainWebpack: config => {
    config.module
      .rule("css")
      .test(/\.css$/)
      .oneOf("vue")
      .resourceQuery(/\?vue/)
      .use("px2rem")
      .loader("px2rem-loader")
      .options({
      // 设置px转化为rem比例，设计稿大小为1920，比例 1920/ 10
        remUnit: 192
      });
  },
}
3.修改flexible.js
全局搜索flexible.js，将refreshRem函数中原本的540替换为width，这样就实现了宽度根据屏幕大小自动适配.
或者在下面的路径找到该文件：node_modules/lib-flexible/flexible.js

function refreshRem(){
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 540) {
            // 将width = 540 * dpr; 540改为width
            width = width * dpr;
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }
重启服务，改变浏览器大小网页的内容能够随着页面大小而改变。
到此这篇关于vue开发页面自适应屏幕尺寸的文章就介绍到这了,更多相关vue页面自适应屏幕内容请搜索脚本之家以前的文章或继续浏览下面的相关文章希望大家以后多多支持脚本之家！

    // Your code here...
})();

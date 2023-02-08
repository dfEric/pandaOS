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
    'use strict';AutomationElement.GetClickablePoint 方法
参考


定义

命名空间:
System.Windows.Automation
程序集:
UIAutomationClient.dll
检索 AutomationElement 上可以单击的点。
public:
 System::Windows::Point GetClickablePoint();
public System.Windows.Point GetClickablePoint ();
member this.GetClickablePoint : unit -> System.Windows.Point
Public Function GetClickablePoint () As Point
返回
Point
一个点的物理屏幕坐标，客户端可以使用该点在此元素单击。
例外
NoClickablePointException
没有可单击的点。
ElementNotAvailableException
AutomationElement 的 UI 不再存在。
示例

以下代码检索控件的可单击点，并将系统游标移动到该点。
// element is an AutomationElement.
System.Windows.Point clickablePoint = element.GetClickablePoint();
System.Windows.Forms.Cursor.Position = 
    new System.Drawing.Point((int)clickablePoint.X, (int)clickablePoint.Y);
' element is an AutomationElement.
Dim clickablePoint As System.Windows.Point = element.GetClickablePoint()
System.Windows.Forms.Cursor.Position = New System.Drawing.Point(CInt(clickablePoint.X), CInt(clickablePoint.Y))
注解

AutomationElement如果它被另一个窗口完全遮盖，则不可单击。
AutomationElement满足以下所有条件时，可单击：
它以编程方式可见，可用于UI 自动化树。
它将完全滚动到其父容器内的视图中（如果有）。 如果剪裁了该元素，则不能保证该元素可单击。
该元素不会被任何其他 UI 元素遮盖。 如果该元素部分被除其上级以外的某些 UI 元素遮盖，则它可能不可单击。
包含元素的窗口必须可单击。 例如，如果包含窗口完全透明，则无法单击该窗口。 鼠标单击将单击到下面的窗口，因此透明窗口中的任何控件都不会返回可单击点。
如果元素是 (（如列表或树视图）) 的容器，则它必须具有一个点，单击时将导致控件的背景处于焦点。 如果容器控件的每个部分都由子元素占用，则它不可单击。
不能保证当单击某个点时，控件将执行任何操作，该点定义为UI 自动化提供程序可单击。 请考虑改用控件模式对控件执行操作。
适用于

    // Your code here...
})();

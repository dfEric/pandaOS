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
    'use strict';首先，使客户端应用程序成为 dpi 感知的应用程序。 若要实现此目的，请在启动时调用 Win32 函数 SetProcessDPIAware。 在托管代码中，以下声明使得此函数可用。
[System.Runtime.InteropServices.DllImport("user32.dll")]
internal static extern bool SetProcessDPIAware();
<System.Runtime.InteropServices.DllImport("user32.dll")> _
Friend Shared Function SetProcessDPIAware() As Boolean
End Function
此函数使得整个进程成为 dpi 感知的进程，这意味着属于该进程的所有窗口都不会被缩放。 例如，在 Highlighter Sample 中，构成突出显示矩形的四个窗口位于从 UI 自动化获取的物理坐标上，而非逻辑坐标。 如果该示例不是 dpi 感知的，将在桌面上的逻辑坐标处绘制突出显示，这将导致在非 96 dpi 环境中错误放置。
若要获取光标坐标，请调用 Win32 函数 GetPhysicalCursorPos。 下面的示例演示如何声明和使用此函数。
public struct CursorPoint
{
    public int X;
    public int Y;
}

[System.Runtime.InteropServices.DllImport("user32.dll")]
internal static extern bool GetPhysicalCursorPos(ref CursorPoint lpPoint);

private bool ShowUsage()
{
    CursorPoint cursorPos = new CursorPoint();
    try
    {
        return GetPhysicalCursorPos(ref cursorPos);
    }
    catch (EntryPointNotFoundException) // Not Windows Vista
    {
        return false;
    }
}
Structure CursorPoint
    Public X As Integer
    Public Y As Integer
End Structure

<System.Runtime.InteropServices.DllImport("user32.dll")> _
Friend Shared Function GetPhysicalCursorPos(ByRef lpPoint As CursorPoint) As Boolean
End Function

Private Function ShowUsage() As Boolean

    Dim cursorPos As New CursorPoint()
    Try
        Return GetPhysicalCursorPos(cursorPos)
    Catch e As EntryPointNotFoundException ' Not Windows Vista
        Return False
    End Try

End Function
注意
请勿使用 Cursor.Position。 未定义此属性在扩展环境下客户端窗口以外的行为。
如果你的应用程序与非 dpi 感知应用程序进行直接的跨进程通信，你可能需要通过使用 Win32 函数 PhysicalToLogicalPoint 和 LogicalToPhysicalPoint 在逻辑和物理坐标之间转换

    // Your code here...
})();

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
# 语音唤醒 Android SDK 文档
# 1、简介
语音唤醒（Voice Wakeuper）通过辨别输入的音频中特定的词语（如“讯飞语点”），返回被命中（唤醒）结果，应用通过回调的结果，进行下一步的处理，如点亮屏幕，或与用户进行语音交互等。唤醒资源中含有一个或多个资源，只要命中其中一个，即可唤醒。需下载使用对应的语音唤醒SDK。

语音唤醒详细的接口介绍及说明请参考： MSC Android API 文档 。

在集成过程中出现错误，请优先查询SDK&API 错误码查询 。如有疑问，请提交工单 进行咨询，可登录讯飞开放平台论坛 与广大开发者共同学习和交流。

# 2、SDK集成指南
# 2.1、Demo运行步骤
根据官网控制台 提示，直接下载SDK，SDK中包含简易可运行的Demo。如下图所示：


下载完SDK后，解压至相应的路径。
注：使用demo测试时，需将res中除layout外资源拷贝到demo中assets相应的路径下
以Android Studio集成开发工具为例，测试时建议直接用真机进行测试。

# 方法一（导入project方式）：
打开Android Studio，在菜单栏File--->new--->import project当前解压sdk路径，使用离线服务能力选择导入mscV5PlusDemo，如下图所示:
 

导入成功之后sync编译下，编译无误可连接手机，开启手机USB开发调试模式，直接在Android Studio运行导入的mscV5PlusDemo，最后生成的apk可直接安装在对应的手机上，如下图所示:

如果编译时出现“ERROR: Plugin with id 'com.android.application' not found.”错误，请在build.gradle文件中添加以下代码。

buildscript {
    repositories {
        google()
        jcenter()
    }
    dependencies {
         //版本号请根据自己的gradle插件版本号自行更改
        classpath 'com.android.tools.build:gradle:3.4.0'
        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}
如在导入项目中还出现其他问题，可参考帖子：安卓demo常见错误排查 

# 方法二（导入module方式）：
打开Android Studio，在菜单栏File--->new--->import module当前解压sdk路径，使用离线服务能力选择导入mscV5PlusDemo，导入成功之后sync编译下，编译无误可连接手机，开启手机USB开发调试模式，直接在Android Studio运行导入的mscV5PlusDemo，最后生成的apk可直接安装在对应的手机上。

# 2.2、项目集成步骤
# 2.2.1、SDK包说明
《Android SDK目录结构一览》

manifests：
android配置应用权限文件
sample:
相关离线能力demo(语音唤醒WakeDemo)
assets:
SDK相关资源配置文件
Libs:
动态库和jar包
res:
UI文件和相关布局文件xml
readme说明(必看)
release 版本说明
# 2.2.2、导入SDK
将在官网下载的Android SDK 压缩包中libs目录下所有子文件拷贝至Android工程的libs目录下。如下图所示：



注：

arm版本已经逐步淘汰了，arm架构的推荐使用armeabi-v7a。
如果您需要将应用push到设备使用，请将设备cpu对应指令集的libmsc.so push到/system/lib中。
集成到项目，需要将sdk中Demo/src/main/下文件拷贝到项目main中，以AS为例，且需要在项目main文件夹下新建Jnilibs并拷贝libmsc.so。
msc.jar需要拷贝至项目libs下，并且右键jar添加Add As Library。
sdk下文件夹main/assets/，自带UI页面(iflytek文件夹)和相关其他服务资源文件(语法文件、音频示例、词表)，使用自带UI接口时，可以将assets/iflytek文件拷贝到项目中;
# 2.2.3、添加用户权限
在工程 AndroidManifest.xml 文件中添加如下权限

<!--连接网络权限，用于执行云端语音能力 -->
<uses-permission android:name="android.permission.INTERNET"/>
<!--获取手机录音机使用权限，听写、识别、语义理解需要用到此权限 -->
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
<!--读取网络信息状态 -->
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
<!--获取当前wifi状态 -->
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
<!--允许程序改变网络连接状态 -->
<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE"/>
<!--读取手机信息权限 -->
<uses-permission android:name="android.permission.READ_PHONE_STATE"/>
<!--读取联系人权限，上传联系人需要用到此权限 -->
<uses-permission android:name="android.permission.READ_CONTACTS"/>
<!--外存储写权限，构建语法需要用到此权限 -->
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<!--外存储读权限，构建语法需要用到此权限 -->
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<!--配置权限，用来记录应用配置信息 -->
<uses-permission android:name="android.permission.WRITE_SETTINGS"/>
<!--手机定位信息，用来为语义等功能提供定位，提供更精准的服务-->
<!--定位信息是敏感信息，可通过Setting.setLocationEnable(false)关闭定位请求 -->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
<!--如需使用人脸识别，还要添加：摄相头权限，拍照需要用到 -->
<uses-permission android:name="android.permission.CAMERA" />
注意：如需在打包或者生成APK的时候进行混淆，请在proguard.cfg中添加如下代码：

-keep class com.iflytek.**{*;}
-keepattributes Signature
# 2.2.4、初始化
初始化即创建语音配置对象，只有初始化后才可以使用MSC的各项服务。建议将初始化放在程序入口处（如Application、Activity的onCreate方法），初始化代码如下：

// 将“12345678”替换成您申请的APPID，申请地址：http://www.xfyun.cn
// 请勿在“=”与appid之间添加任何空字符或者转义符
SpeechUtility.createUtility(context, SpeechConstant.APPID +"=12345678");
# 3、参数说明
# 3.1、基础参数说明
参数名称	名称	说明
IVW_SST	唤醒业务类型	主要分为两种：唤醒（wakeup），唤醒识别（oneshot）
默认：wakeup
IVW_THRESHOLD	唤醒门限值	门限值越高，则要求匹配度越高，才能唤醒
值范围：[0，3000]
默认值：1450
KEEP_ALIVE	持续唤醒	持续唤醒支持参数：
0：单次唤醒
1：循环唤醒
默认值：0
IVW_RES_PATH	唤醒资源路径	唤醒需要使用本地资源，通过此参数设置本地资源所在的路径
值范围：有效的资源文件路径 
默认值：null
VW_NET_MODE	唤醒闭环优化模式	优化模式支持参数：
0：关闭优化功能
1：开启优化功能
默认值：0
备注：以上均为SDK常用参数说明，均在setParam()方法里面设置，设置示例： mIvw.setParameter(SpeechConstant.IVW_SST, "wakeup");;更多详细参数请参考：MSC Android API 文档 .

# 3.2、唤醒识别
唤醒类型中，有一种类型叫“唤醒识别”（oneshot），是在说唤醒词后，马上说识别命令，SDK 则在唤醒的同时，对命令进行识别，如“讯飞语点，打电话给张三”，其中，“讯飞语点”是唤醒词，“打电话给张三”是命令（语法识别中的某条规则，关于语法识别可以参考对应的章节）。从以上特点可以知道，在唤醒识别时，还需要传入在线语法ID，或本地语法路径。

// 设置业务类型为唤醒识别
mIvw.setParameter( SpeechConstant.IVW_SST,"oneshot" );

//设置识别引擎，只影响唤醒后的识别（唤醒本身只有离线类型）
mIvw.setParameter( SpeechConstant.ENGINE_TYPE, asrEngineType );

if( SpeechConstant.TYPE_CLOUD.equals(asrEngineType) ){
	//设置在线识别的语法ID
	mIvw.setParameter( SpeechConstant.CLOUD_GRAMMAR, grammarID );
}else{
    // 设置本地识别资源
	mIvw.setParameter( ResourceUtil.ASR_RES_PATH, asrResPath );
	
    // 设置语法构建路径
	mIvw.setParameter( ResourceUtil.GRM_BUILD_PATH, grmPath );
}

ret = mIvw.startListening( listener );
唤醒识别时，唤醒的状态获取不变，而识别的结果则通过回调中的事件获取。

# 3.3、闭环优化
闭环优化是针对开发者的唤醒资源由云端优化系统不断优化的功能。通过开发者 APP 使用场景，本地唤醒 SDK 自动挑选音频数据上传至云端，进行训练生成优化唤醒资源。开发者 APP 使用场景中，优化唤醒资源在相比原有资源在提升唤醒率及抑制误唤醒方面有良好的表现。持续优化包含两种网络模式：

模式 0：关闭优化功能，禁止向服务端发送本地挑选数据；
模式 1：开启优化功能，允许向服务端发送本地挑选数据；
// 设置开启优化功能
mIvw.setParameter( SpeechConstant.IVW_NET_MODE, "1" );
# 3.4、唤醒结果
唤醒结果字段说明:

参数	参数解释
sst	本次业务标识：wakeup表示语音唤醒；oneshot表示唤醒+识别；
id	当前唤醒词的id
score	当前唤醒得分，只有当分数大于等于设置的门限值时才会回调唤醒结果
bos	当前唤醒音频的前端点，即当前唤醒音频在写入的总音频中的开始时间位置，单位:ms
eos	当前唤醒音频的尾端点，即当前唤醒音频在写入的总音频中的结束时间位置，单位:ms
keyword	当前唤醒词，若是中文唤醒词会自动以拼音形式显示
语音唤醒结果示例：

{
"sst":"wakeup",
"id":0,
"score":1450,
"bos":1610,
"eos":2260,
"keyword":"ding1dong1ding1dong1"
}
# 4、视频教程
视频教程

# 5、常见问题
# 如何避免误唤醒？
答：遇到误唤醒率较高的问题，可以按照两步走解决：
(1)可以通过唤醒门限值参数IVW_THRESHOLD来调节，门限值越高，则要求匹配度越高，才能唤醒，此参数同样适用唤醒困难的问题。
(2)定制的唤醒词按照唤醒词规则设置，效果更佳。唤醒词配置的设置规则，请参考控制台唤醒词模块的具体说明。
# 如何实现一直监听唤醒词？
答：可以通过参数KEEP_ALIVE参数来设置持续唤醒，这样会返回多次结果。
# 目前安卓平台具体支持安卓版本？
答：Android版本SDK目前支持4.4以上版本，React-Native ，QT 等跨平台方案，目前暂不支持。
# 集成语音识别功能时，程序启动后没反应？
答：请检查是否忘记使用SpeechUtility初始化。也可以在监听器的onError函数中打印错误信息，根据信息提示，查找错误源。
# 语音唤醒sdk如何下载试用？
答：文档中心---快速指引 有介绍步骤---根据步骤下载相应平台的语音唤醒sdk，语音唤醒SDK包有10个装机量，试用期为90天。
# 如何设置唤醒词？
答：登录讯飞开放平台，点击“我的应用”，选择所创建的应用的语音唤醒服务，点击“制作唤醒词资源”，可提交设置的唤醒词。唤醒词目前支持中文和英文，最多支持8个，每个为4-6个汉字或不超过2个英文单词。中英文不可同时配置。
# 语音唤醒的主要功能有什么？
答：设备(手机、玩具、家电等)在休眠或锁屏状态下也能检测到用户的声音(设定的语音指令，即唤醒词)，让处于休眠状态下的设备直接进入到等待指令状态，开启语音交互第一步。
# 如何购买语音唤醒？
答：登录讯飞开放平台，点击进入语音唤醒页面，点击到语音唤醒页面，可查看到详细的价格表。点击对应套餐包的“立即购买”，可进行支付购买。
在这篇文章中：
1、简介
2、SDK集成指南
3、参数说明
4、视频教程
5、常见问题
 
    // Your code here...
})();

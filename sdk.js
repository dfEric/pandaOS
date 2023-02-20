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
    var asr
AIkit_commandWord
Android-SDK

# AIkit命令词识别(中) Android SDK 文档
# 简介
该中文命令词能力可以将声音信息转化为文本信息，引用本地新一代语音识别引擎，采用最新的端到端技术，将最新的边缘计算（Edge Computing）应用于本地实时语音识别场景，实时输入音频流，并在一定响应时间内给出识别结果。广泛应用于车载导航、语音助手、AIoT（人机交互）等行业领域。

协议类型：异步流式
支持多实例并发：否

# 授权激活
授权方式支持【设备授权】和【应用授权】2种。

设备授权： 按照设备数和有效期授权，激活设备数达到授权量上限后，新设备将无法继续激活使用。SDK采集多个设备标识按照权重算法生成设备指纹精准标识设备，计量准确。支持所有平台。

应用授权： 对指定应用授权，仅可在授权的应用上使用，无数量限制，可限制有效期。需提供应用唯一标识，授权能力后，应用级授权支持Android、iOS平台应用。

能力激活支持【在线激活】和【离线激活】2种方式。在能力首次使用时，需要先激活后方可使用。激活时会获取授权license缓存到设备内部存储中。

在线激活: 在首次使用时，需要将设备联网，SDK初始化时获取授权license激活。设备激活后，即可在无网环境下使用。如果有恢复出厂设置或清空应用缓存等操作，将license清除后，能力将无法正常使用，将设备联网重启应用即可恢复。适用于设备可联网场景，激活过程简单。
离线激活: 将申请的批量激活license文件内置到设备中，在初始化时指定离线激活文件路径，SDK初始化时会自动读取解析本地离线激活文件激活设备，设备激活后，离线激活文件会自动删除。如果有恢复出厂设置或清空应用缓存等操作，将license清除后，能力将无法正常使用，需通过离线激活文件重新激活。适用于设备不可联网或无网场景。

# 接口调用流程
兼容机型

类别	兼容范围
系统	支持Android 5.0 ~ Android 11 版本，鸿蒙系统未做系统兼容性验证
机型	上市的Android手机和平板、及符合具体能力性能要求的Android系统扫描笔、手表等设备
网络	对网络无要求，设备具备联网条件，可使用在线激活方式，首次使用需要连接网络。若设备不能联网，需要使用离线激活方式
开发环境	建议使用 Android Studio 进行开发
# 1、集成指南
DEMO 中已经集成了 SDK。您可以参考DEMO，集成SDK。
集成前，请先测通DEMO，了解调用原理。
如果您自己代码过于复杂，可以使用一个helloworld项目了解集成过程。
将SDK zip包解压缩，得到如下文件：

Demo //能力SDK Demo、SDK使用说明readme.txt，示例能力调用
SDK //能力SDK，导入SDK库时使用
resource //能力对应模型资源，多能力组合时，resource文件夹中包含多个子文件夹
测试报告 //SDK 测试报告
ReleaseNotes.txt //SDK版本日志
1.1 导入SDK库 复制 AIKit.aar 到项目的 libs 目录下，然后在项目的 build.gradle 文件中，增加如下配置：

// 已忽略无关代码
dependencies {
    implementation fileTree(include: ['*.jar'], dir: 'libs')
    implementation files('libs/AIKit.aar')
}
1.2 配置权限

AIKit SDK中使用了如下权限：

权限	使用说明
INTERNET	SDK需要访问网络获取、更新授权
READ_PHONE_STATE	获取设备IMEI用于精准授权，IMEI加密存储，不会存储明文
WRITE_EXTERNAL_STORAGE	SDK写本地日志需要用到该权限
READ_EXTERNAL_STORAGE	SDK加载本地模型资源文件需要该权限
MOUNT_UNMOUNT_FILESYSTEMS	Android 11以上需要该权限
READ_PRIVILEGED_PHONE_STATE	Android 10 以后新增权限，同 READ_PHONE_STATE
SDK中已配置如下权限，如部分权限不需要，可通过如下配置去除

<!-- 移除SDK非必须权限示例 -->
<uses-permission android:name="android.permission.READ_PHONE_STATE" tools:node="remove" />
<uses-permission android:name="android.permission.READ_PRIVILEGED_PHONE_STATE" tools:node="remove" />
Android 10.0（API 29）及以上版本需要在application中做如下配置

<application android:requestLegacyExternalStorage="true"/>
1.3 资源导入 复制resource文件夹中文资源到应用的工作目录，即为SDK初始化中的workDir。

1.4 SDK初始化 在使用能力前，需要首先初始化SDK，使用SDK提供的单能力或组合能力时，SDK均只需要初始化一次。

// 初始化参数构建
JLibrary.Params params = JLibrary.Params.builder()
            .appId("$appId")
            .apiKey("$apiKey")
            .apiSecret("$apiSecret")
            .workDir("/sdcard/iflytek/xxx")//SDK工作路径，这里未绝对路径，此处仅为示例
            .licenseFile("/sdcard/iflytek/xxx/aee.license")//如果使用离线激活，如要此行配置，指定离线激活文件绝对路径
            .build();
// 初始化
JLibrary.getInst().initEntry(getApplicationContext(), params);
如上代码所示，SDK初始化参数中appId、apiKey、apiSecret 和workDir为必填项。 以下是这些初始化参数：

参数	类型	必填	说明
appID	String	是	应用ID
apiKey	String	是	离线引擎托管平台创建应用后，生成的唯一应用标识
apiSecret	String	是	离线引擎托管平台创建应用后，生成的唯一应用秘钥
workDir	String	是	SDK工作目录
licenseFile	String	否	离线授权license文件绝对路径，SDK离线激活方式，需要从离线引擎托管平台申请的离线授权license文件，放入设备指定路径中（可放入至SDK工作路径下），即licenseFile参数即为离线激活文件的绝对工作路径。
customDevice Id	String	否	用户自定义设备指纹块，默认为空，设置后会成为设备指纹的一部分，建议设置长度低于256
authType	int	否	离线授权类型，包括(默认)设备级授权（DEVICE）和应用级授权（APP）
authInterval	int	否	在线授权校验间隔时长，默认为300s，可自定义设置，最短为60s，单位：秒
iLogOpen	bool	否	开启SDK日志保存，默认false
iLogMaxCount	int	否	本地日志最大存储个数 【1，300】，默认70
iLogMaxSize	int	否	单日志文件大小（1024，10485760】，默认1024，单位字节
1.5 注册代理

SDK 初始化状态及能力结果可通过注册监听，在回调方法中获取，SDK的状态和结果回调只支持一个监听器，多次设置会覆盖。使用组合能力时，可通过能力id（ability）区分是哪个能力的回调。可通过registerListener 同时注册两个监听，也可分别注册，注册方法及回调接口说明如下：

// 可以同时注册两个监听器，亦可以只注册其中一个
JLibrary.getInst().registerListener(coreListener, responseListener);
// JLibrary.getInst().registerListener(coreListener);
// JLibrary.getInst().registerListener(responseListener);
1.5.1 CoreListener（SDK状态回调）

private CoreListener coreListener = new CoreListener() {
     @Override
     public void onAuthStateChange(ErrType type, int code) {
     }
};
onAuthStateChange： SDK仅需要初始化一次，首次初始化成功后，再次初始化不会调用该方法。若初始化失败，再次调用初始化，会再次回调。
参数	类型	必填	说明
type	ErrType	是	SDK错误类型，0 表示授权错误，1 表示 http 请求错误
code	int	是	错误码，0 表示正常
1.5.2 AiResponseListener（能力输出回调）

private AiResponseListener responseListener = new AiResponseListener() {
    @Override
    public void onResult(String ability, int handleID, List<AiResponse> responseData, Object usrContext) { }

    @Override
    public void onEvent(String ability, int handleID, int event, List<AiResponse> eventData, Object usrContext) { return; }

    @Override
    public void onError(String ability, int handleID, int err, String msg, Object usrContext) { }
};
onResult：
参数	类型	必填	说明
ability	String	是	能力标识ID
handleID	int	是	会话ID
usrContext	Object	否	用户自定义标识
responseData	List	是	能力执行结果
onEvent:
参数	类型	必填	说明
ability		String	是
handleID	int	是	会话ID
event	enum	是	0=未知；1=开始；2=结束；3=超时；4=进度
usrContext	Object	否	用户自定义标识
eventData	List	是	事件消息数据
onError：
参数	类型	必填	说明
ability	String	是	能力标识ID
handleID	int	是	会话ID
err	int	是	错误码
msg	String	否	错误描述
usrContext	Object	否	用户自定义标识
AiResponse对象：
参数	类型	必填	说明
key	String	是	输出数据名称
type	enum	是	输出数据类型，0=音频；1=文本；2=图片；3=视频；5=个性化数据
value	byte[]	否	字节数组类型输出数据
varType	enum	是	输出数据参数类型，0=字节数组；1=整型；2=实型；3=布尔型
len	int	是	输出数据长度
1.6 日志配置

AiHelper.getInst().setLogInfo(LogLvl.DEBUG, 1, "./");
日志配置参数
参数	类型	说明
LogLvl	enum	日志级别枚举值如下: DEBUG, INFO, WARN, ERROR, FATAL, OFF
LogMode	int	日志模式（stadout:0 logcat:1 file:2）
LogPath	String	日志路径
1.7 引擎初始化

在调用能力前，需先初始化引擎，引擎只需初始化一次。

// 参数构建
AiRequest.Builder builder = AiRequest.builder();
builder.param("$paramKey", "$paramValue")

// 初始化引擎
AiHelper.getInst().engineInit("$abilityId", builder.build());
engineInit： 请求：
参数	类型	必填	说明
abilityId	String	是	能力ID
param	AiRequest	否	引擎初始化参数，可使用AiRequest.Builder快捷构建，paramKey、paramValue参考引擎参数说明
引擎参数：

功能标识	功能描述	数据类型	取值范围	必填	默认值
procLanguageType	后处理语种类型	int	0:中文, 1:英文	是	
decNetType	解码类型	string	wfst: wfst解码, fsa: 命令词, wfst_fsa: 混合解码	是	
punishCoefficient	fsa惩罚分数	double	最小值:0, 最大值:10	是	
savePath	个性化资源保存路径	string	最小长度:0, 最大长度:32	否	
返回：

0 = 成功，其他 = 错误
1.8 个性化数据接口 非必需接口，对于依赖个性化资源的能力，需要调用如下接口。需要调用的，Demo里会给出示例，参考Demo调用即可。

个性化数据加载 加载个性化数据，指定个性化文件名及文件路径，根据能力要求可加载一个或多个。
AiInput.Builder customBuilder = AiInput.builder();
/**
* key 数据标识
* value 数据内容
* index 数据索引,用户可自定义设置
*/
customBuilder.customText("$key1","/sdcard/iflytek/xxx/xxx1.txt", 0 );
customBuilder.customText("$key2","/sdcard/iflytek/xxx/xxx2.txt", 1 );
customBuilder.customText("$key3","/sdcard/iflytek/xxx/xxx3.txt", 2 );
//数据加载
ret = AiHelper.getInst().loadData("$abilityId", customBuilder.build());
if (ret != 0 ) {
     Log.e(TAG, "loadData 失败：" + ret);
}
loadData 方法参数说明：

参数	类型	必填	说明
abilityId	String	是	能力标识ID
request	AiRequest	是	个性化数据构造器
个性化数据集指定 指定引擎使用的个性化数据集。
//指定要使用的个性化数据集合，未调用，则默认使用所有loadData加载的数据
int[] indexs = { 0 };
/**
* indexs 个性化数据索引数组
*/
//数据落盘
AiHelper.getInst().specifyDataSet("$abilityId","$key",indexs);
if (ret != 0 ) {
     Log.e(TAG, "specifyDataSet 失败：" + ret);
}
loadData 方法参数说明：

参数	类型	必填	说明
abilityId	String	是	能力标识ID
key	String	是	个性化资源key
indexs	AiRequest	是	个性化资源索引
个性化数据预处理 为避免个性化数据重复加载耗时，可调用该预处理方法，对原始个性化资源进行预处理，再次调用能力时，则引擎会自动加载预处理后的资源。
AiInput.Builder customBuilderPre = AiInput.builder();
/**
* key 数据标识
* value 要生成的个性化资源文件路径
* index 数据索引
*/
customBuilderPre.customText("$key", "xxxx.bin", 0 );
ret = AiHelper.getInst().preProcess("$abilityId", customBuilderPre.build());
if (ret != 0 ) {
     Log.e(TAG, "preProcess 失败：" + ret);
}
preProcess方法参数说明：

参数	类型	必填	说明
abilityId	String	是	能力标识ID
request	AiRequest	是	个性化资源key
1.9 能力调用接口

1.9.1 异步流式接口 流式送入能力输入数据，异步在AiResponseListener回调中返回结果。

// 参数构建
AiRequest.Builder builder = AiRequest.builder();
builder.param("$paramKey", "$paramValue")

    // 开始计算
   Object usrContext = null;
AiHandle handle = AiHelper.getInst().start("$abilityId", builder.build(), usrContext);
if (!handle.isSuccess()) {
    Log.e(TAG, "ERROR::START | handle code:" + handle.getCode());
    return;
}

// 输入数据构建
AiRequest.Builder builder = AiRequest.builder();
//根据能力要求参考demo选择一种格式输入构造
builder
    //.audio("$audioKey", "$audioValue")
    //.video("$videoKey", "$paramValue")
    // .image("$imageKey", "$imageValue")
    .text("$textKey", "$textValue");

// 输入
AiHelper.getInst().write(builder.build(), handle);

// 结束计算
AiHelper.getInst().end(handle);
start（启动会话，流式接口） 请求：
参数	类型	必填	说明
ability	String	是	能力标识ID
request	AiRequest	是	能力参数，可使用AiRequest.Builder快捷构建
usrContext	Object	否	用户自定义标识
返回：AiHandle

AiHandle对象内部提供isSucess方法，用于判断会话是否启动成功
write（写入数据，流式接口） 请求： | 参数 | 类型 | 必填 | 说明 | | -- | -- | -- | -- | |input | AiRequest | 是 | 能力输入，可使用AiRequest.Builder快捷构建 | |handle | AiHandle | 是 | 会话的handle对象 |
返回：

0=成功，其他=错误
end（结束会话，流式接口） 请求： |参数| 类型 | 必填 | 说明 | |-- |-- |-- |-- | |handle | AiHandle | 是 | 会话的handle对象 |
返回：

0=成功，其他=错误
1.9.2 同步流式接口 流式送入能力输入数据，送入一次数据后，需要调用 read（）方法等待结果返回，结果获取后通过AiResponseListener回调接收能力输出数据，同步流式接口需获取能力输出数据后，才可送入下一次数据。

// 参数构建
AiRequest.Builder builder = AiRequest.builder();
builder.param("$paramKey", "$paramValue")

    // 开始计算
    Object usrContext = null;
AiHandle handle = AiHelper.getInst().start("$abilityId", builder.build(), usrContext);
if (!handle.isSuccess()) {
    Log.e(TAG, "ERROR::START | handle code:" + handle.getCode());
    return;
}

// 输入数据构建
AiRequest.Builder builder = AiRequest.builder();
//根据能力要求参考demo选择一种格式输入构造
builder
      //.audio("$audioKey", "$audioValue")
      //.video("$videoKey", "$paramValue")
      // .image("$imageKey", "$imageValue")
      .text("$textKey", "$textValue");

// 输入
AiHelper.getInst().write(builder.build(), handle);
AiHelper.getInst().read("$abilityId", handle);
// 结束计算
AiHelper.getInst().end(handle);
start（启动会话，流式接口） 请求：
参数	类型	必填	说明
ability	String	是	能力标识ID
request	AiRequest	是	能力参数，可使用AiRequest.Builder快捷构建
usrContext	Object	否	用户自定义标识
返回：AiHandle

AiHandle对象内部提供isSucess方法，用于判断会话是否启动成功
write（写入数据，流式接口） 请求：
参数	类型	必填	说明
input	AiRequest	是	能力输入，可使用AiRequest.Builder快捷构建
handle	AiHandle	是	会话的handle对象
返回：

0=成功，其他=错误
read（异步流式接口，需要调用该方法读取能力输出数据） 请求：
参数	类型	必填	说明
abilityId	String	是	能力id
handle	AiHandle	是	会话的handle对象
返回：

0=成功，其他=错误
end（结束会话，流式接口） 请求：
参数	类型	必填	说明
handle	AiHandle	是	会话的handle对象
返回：

0=成功，其他=错误
能力参数：

功能标识	功能描述	数据类型	取值范围	必填	默认值
vadLoad	加载VAD资源	bool	true:加载, false:不加载	否	false
vadLinkOn	vad子句连接	bool	true:开启, false:关闭	否	false
vadOn	开启vad	bool	true:开启, false:关闭	是	
postprocOn	后处理开启	bool	true:开启, false:关闭	否	true
vadSpeechEnd	vad后端点	int	最小值:0, 最大值:999999	否	80
vadResponsetime	vad前端点	int	最小值:0, 最大值:999999	否	1000
beamThreshold	解码控制beam的阈值	int	最小值:1, 最大值:100	否	60
hisGramThreshold	解码Gram阈值	int	最小值:1, 最大值:10000	否	3000
能力输入参数: 数据段名称：audio 数据类型：音频

1.10 请求构造器：AiRequest.Builder

功能参数构建 AiRequest.Builder.param：
参数	类型	必填	说明
key	String	是	功能参数名称
value	String/int/double/bool	是	功能参数取值
音频输入构建 AiRequest.Builder.audio：
参数	类型	必填	说明
key	String	是	音频输入名称
value	String/byte[]	是	音频输入值，内存数据
AiRequest.Builder.audioFile：

参数	类型	必填	说明
key	String	是	音频输入名称
path	String	是	音频输入值的文件路径
1.11 参数配置

AiHelper.getInst().setConfig("host","www.iflytek.com");
可配置参数
参数	类型	说明
host	String	请求地址
licenseStoragePath	String	授权文件存储路径
logMaxSize	String	日志文件大小
1.12 设置资源卸载模式

AiHelper.getInst().setMemoryMode(ability, mode);
可配置参数
参数	类型	说明
ability	String	能力id
mode	String	0 ：会话结束不卸载资源
1 : 会话结束时卸载按需加载的资源
# 2、参数说明
2.1 功能参数

功能标识	功能描述	数据类型	取值范围	必填	默认值
vadLoad	加载VAD资源	bool	true:加载, false:不加载	否	false
vadLinkOn	vad子句连接	bool	true:开启, false:关闭	否	false
vadOn	开启vad	bool	true:开启, false:关闭	是	
postprocOn	后处理开启	bool	true:开启, false:关闭	否	true
vadSpeechEnd	vad后端点	int	最小值:0, 最大值:999999	否	80
vadResponsetime	vad前端点	int	最小值:0, 最大值:999999	否	1000
beamThreshold	解码控制beam的阈值	int	最小值:1, 最大值:100	否	60
hisGramThreshold	解码Gram阈值	int	最小值:1, 最大值:10000	否	3000
2.2 能力输入数据 数据段名称：audio 数据类型：音频

字段	含义	数据类型	取值范围	默认值	说明	必填
encoding	音频编码	string	lame, speex, opus, speex-wb	speex-wb	取值范围可枚举	否
sample_rate	采样率	int	16000, 8000	16000	音频采样率，可枚举	否
channels	声道数	int	1, 2	1	声道数，可枚举	否
bit_depth	位深	int	16, 8	16	单位bit，可枚举	否
data	音频数据	string	音频大小：0-10M	否		
frame_size	帧大小	int	最小值:0, 最大值:1024	0	帧大小，默认0	否
2.3 能力输出数据 数据段名称：data 数据类型：文本

字段	含义	数据类型	取值范围	默认值	说明	必填
encoding	文本编码	string	utf8, gb2312	utf8	取值范围可枚举	否
compress	文本压缩格式	string	raw, gzip	raw	取值范围可枚举	否
format	文本格式	string	plain, json, xml	json	取值范围可枚举	否
data	文本数据	string			文本大小：0-1M	否
2.4 个性化数据 数据段名称：FSA 数据类型：文本

字段	含义	数据类型	取值范围	默认值	说明	必填
encoding	文本编码	string	utf8, gb2312	utf8	取值范围可枚举	否
compress	文本压缩格式	string	raw, gzip	raw	取值范围可枚举	否
format	文本格式	string	plain, json, xml	json	取值范围可枚举	否
data	文本数据	string			文本大小：0-1M	否
数据段名称：FSABIN 数据类型：文本

字段	含义	数据类型	取值范围	默认值	说明	必填
encoding	文本编码	string	utf8, gb2312	utf8	取值范围可枚举	否
compress	文本压缩格式	string	raw, gzip	raw	取值范围可枚举	否
format	文本格式	string	plain, json, xml	json	取值范围可枚举	否
data	文本数据	string			文本大小：0-1M	否
# 常见问题
SDK 错误码返回18700，错误日志出现 “online license activate ret:18700 ；auth request failed:2007,未发现SDK” 如何解决? appid 未授权该SDK 能力，请申请授权后使用该能力。

SDK 错误码返回18714，错误日志出现 “[{"message":"HMAC signature cannot be verified: fail to retrieve credential"}]” 如何解决? appid、apiKey、apiSecret 配置有误，请检查配置。

SDK 初始化返回 18007，错误日志出现"httpPost failed! 401{"message":"HMAC signature does not match"}；online license activate ret:18714；AEE_Init ret 18007"，如何解决？ apiKey 或 apiSecret 有误，请检查apiKey、apiSecret 的值是否正确，并替换为正确的值。

SDK 初始化时返回18704，错误日志出现“auth request failed:2003,未发现应用”；“AEE_Init ret 18704,”，如何解决？ appid 不存在或appid 未授权，请使用正确的 appid。

SDK 初始化时返回18400，错误日志出现 “workDir does not have write permission sdcard/xxxx/xxx”，“AEE_Init ret 18400” SDK 初始化时设置的SDK工作路径即“workDir” 无读写权限，请确保SDK 初始化时，SDK工作路径具有读写权限。

Android 平台运行SDK Demo 时，出现如下崩溃，如何解决？

Caused by: java.security.InvalidParameterException
at com.iflytek.edgeAI.core.JLibrary$Params$Builder.build(Unknown Source:``41``)
at com.iflytek.aeesdkdemo.sdk.SDKHelper.initSdk(SDKHelper.java:``55``)``
at com.iflytek.aeesdkdemo.xtts.XTTSActivity.initSDK(XXXXActivity.java:``144``)
at com.iflytek.aeesdkdemo.xtts.XTTSActivity.onCreate(XXXXActivity.java:``81``)
at android.app.Activity.performCreate(Activity.java:``8214``)
崩溃原因为 appid、apiKey、apiSecret 存在为空的值，请正确配置 appid、apiKey、apiSecret。

SDK 在初始化引擎时，返回 18601，错误日志出现 “AEE_EngineInit:e09712bcb11 ret 18601”；“ability: xxxxxxx not exist”，如何解决？ 能力（能力id为 xxxxxx）不存在，初始化引擎时传入的能力id有误，请检查能力id是否正确；或改能力未授权，请确认该能力是否已申请授权。

调用SDK 的start 或 AEE_Start 方法时，返回错误码 18105，错误日志出现“AEE_Start:e09712bcb ret 18105”; "cannot find dependent resource: xxxxxx",如何解决？ 该错误为资源未找到，请检查是否将资源导入到了SDK的工作路径下。

日志中出现“AEE_Start: xxxxxxx ret 18310; AEE_Start failed:18310”错误日志如何解决？ 流式接口能力，调用 AEE_Start 或 start 方法开始的会话，未调用AEE_End 或 end 方法打断或正常结束，再次调用AEE_Srart则SDK会返回18310错误，同一个能力SDK不支持并发调用，需要结束本次会话之后，才能开始下一次会话。

日志中出现“[ERROR]:[ getAbility]-[0474]:ability:64b9b706 not exist AEE_EngineInit: xxxxxxx ret 18601” ，错误码返回18601 错误，如何解决？ 请检查确认引擎初始化及调用能力时所传能力id参数是否正确；如果能力ID无误，SDK日志中打印的 xxxxxx 能力未授权。

日志中出现“auth request failed:2015,无效的指纹”、“online license activate ret:18713”，SDK返回18713错误，如何解决？ 应用安全等级与设备指纹不符，须申请调整appid 安全等级；

# 错误码
错误码	含义	自查指南
18000	本地license文件不存在	离线激活方式，请检查离线授权文件路径下，license 文件是否存在；如果不存在，请将申请的离线授权文件放置在对应路径下； 在线激活方式下，请检查 workDir 目录下 license 文件是否存在，如果不存在，请将设备联网，重启应用。
18001/
18002/
18003/
18004	授权问题	Linux 平台删除授权文件，将设备联网，重启应用，重新从云端获取授权文件； Android端清除应用缓存，将设备联网，重启应用，重新从云端获取授权文件； 如仍有问题，请联系平台技术支持协助解决。
18005	授权已过期	能力授权已过期。
18006	授权时间错误，设备时间比标准时间慢 30 分钟以上	设备时间不准确导致，请校正设备时间为标准时间，重启应用。
18007	授权应用不匹配（apiKey、apiSecret）	apiKey、apiSecret 配置有误，请核对项目中配置的 apiKey、apiSecret 。
18008	授权文件激活过期	非永久授权激活文件的有效期为 3天，Linux 平台删除授权文件、Android平台清除应用缓存后重启应用重新激活； 若设备无法联网，请重新申请离线激活文件，在 3 天内激活。
18010	离线授权激活文件	指定平台与设备平台不匹配批量授权激活文件不支持当前设备平台，离线批量授权文件仅只支持申请时指定的的特定平台，不可多平台混用。
18011	离线授权激活文件	指定架构与设备 CPU 架构不匹配批量授权激活文件不支持当前设备架构，离线批量授权文件仅只支持申请时制定的特定架构，不支持多架构混用。
18012	离线授权激活文件中包含 license 个数异常	离线批量激活文件异常，请检查设备中使用的离线激活文件与所申请的是否一致.
18013	离线授权激活文件中未找到当前设备	批量离线授权激活文件中不包含改设备，请联网激活或申请离线授权激活文件。
18014	离线授权激活文件中设备指纹安全等级非法	离线授权文件中安全等级错误，请联系平台重新提供。
18100/
18101/
18102	资源错误	请仔细检查所用资源与平台提供的资源是否一致，可通过MD5对比，请使用提供SDK时附带的成套资源。
18104	资源路径打开失败	资源路径无读写权限，请确保在 SDK 初始化时以获取到读写权限，或将资源路径设置为有读写权限的路径下。
18105	资源加载失败，workDir 内未找到对应资源	请根据日志提示将所需资源导入到指定路径下。
18106	资源卸载失败	请检查代码是否存在未初始化时调用 SDK uninit 方法，或多次调用 uninit 方法
18200	引擎鉴权失败	应用授权信息与SDK不对应。 1. 请尝试将设备联网后重启应用； 2. 请检查您项目中使用的SDK和平台提供的是否一致；
18201	引擎动态加载失败	请检查日志中打印的引擎库是否已导入到项目中
18202	引擎未初始化	请检查调用能力前是否已初始化引擎及初始化是否成功。
18203	引擎不支持该接口调用	请参照 Demo 仔细检查方法调用是否正确。
18301	SDK未初始化	在使用能力前请先初始化 SDK，如果有调用 uninit 方法，再次使用能力时需要重新初始化。
18302	SDK初始化失败	请根据CoreListener回调中返回的错误码参考此文档做对应检查。
18303	SDK	已经初始化重复初始化导致，使用能力时，SDK 只需要初始化一次，请检查 SDK 初始化逻辑是否存在多次初始化。
18304	不合法参数	请参考demo及协议文件仔细检查所传参数是否正确；若确认无误，请联网后重启应用后重试。
在这篇文章中：
简介
授权激活
接口调用流程
常见问题
错误码
 
    // Your code here...
})();

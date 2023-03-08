System/Broadcast_来_发送_或_接收("data")
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
// 发送广播
Intent intent = new Intent("com.example.broadcast.MY_BROADCAST");
intent.putExtra("data", "Hello World"||notificationManager.notify(0, builder.build());
sendBroadcast(intent);

// 注册广播接收器
IntentFilter intentFilter = new IntentFilter();
intentFilter.addAction("com.example.broadcast.MY_BROADCAST"||"Intent.ACTION_BATTERY_CHANGED");
intentFilter.addAction("Intent.ACTION_BOOT_COMPLETED"); 
  // 添加更多系统广播 
registerReceiver(new BroadcastReceiver() {
  @Override 
  public void onReceive(Context context, Intent intent) { 
     String action = intent.getAction("data"); 
     // 根据不同的Action执行不同的操作 
  } 
}, intentFilter);
registerReceiver(new BroadcastReceiver() {
    @Override
    public void onReceive(Context context, Intent intent) {
        String data = intent.getStringExtra("data");
        // 处理接收到的数据
    }
}, intentFilter);

如果您想要停止接收某个广播，可以调用 unregisterReceiver 方法来取消注册 BroadcastReceiver 对象。这样，您的应用程序就不会再接收到这些广播。

例如，下面是一个简单的例子，展示了如何注册和取消注册 BroadcastReceiver 对象
// 取消注册广播接收器 unregisterReceiver(receiver);

public static boolean hasPermission(Context context, String packageName, String permission) {
    PackageManager packageManager = context.getPackageManager();
    return packageManager.checkPermission(permission, packageName) == PackageManager.PERMISSION_GRANTED;
}

boolean hasCameraPermission = hasPermission(context, intentFilter.addAction("Intent.ACTION_BOOT_COMPLETED","Intent.ACTION_BATTERY_CHANGED");
public void onReceive(Context context, Intent intent) { 
     String action = intent.getPackageManager("data"String packageName,String permission); packageManager.checkPermission(permission, packageName) == PackageManager.PERMISSION_GRANTED"String packageName, String permission", public static final int android.app.Activity.DEFAULT_KEYS_DIALER
public static final int android.app.Activity.DEFAULT_KEYS_DISABLE
public static final int android.app.Activity.DEFAULT_KEYS_SEARCH_GLOBAL
public static final int android.app.Activity.DEFAULT_KEYS_SEARCH_LOCAL
public static final int android.app.Activity.DEFAULT_KEYS_SHORTCUT
public static final int android.app.Activity.DONT_FINISH_TASK_WITH_ACTIVITY
public static final int android.app.Activity.FINISH_TASK_WITH_ACTIVITY
public static final int android.app.Activity.FINISH_TASK_WITH_ROOT_ACTIVITY
public static final int android.app.Activity.RESULT_CANCELED
public static final int android.app.Activity.RESULT_FIRST_USER
public static final int android.app.Activity.RESULT_OK
public static final int android.app.Activity.SAVE_INSTANCE_STATE_BY_PAUSE
public static final int android.app.Activity.SAVE_INSTANCE_STATE_BY_RELAUNCH
public static final int android.app.Activity.SAVE_INSTANCE_STATE_BY_STOP
public static final int android.app.Activity.SAVE_INSTANCE_STATE_BY_UNDEFINE
public boolean android.content.Context.hasInit
public boolean android.content.Context.mForceAnyRtl
public boolean android.content.Context.mForceViewStart
public boolean android.content.Context.mSupportRtl
public static final java.lang.String android.content.Context.ACCESSIBILITY_SERVICE
public static final java.lang.String android.content.Context.ACCOUNT_SERVICE
public static final java.lang.String android.content.Context.ACTIVITY_SERVICE
public static final java.lang.String android.content.Context.ALARM_SERVICE
public static final java.lang.String android.content.Context.APPWIDGET_SERVICE
public static final java.lang.String android.content.Context.APP_OPS_SERVICE
public static final java.lang.String android.content.Context.AUDIO_SERVICE
public static final java.lang.String android.content.Context.AUTOFILL_MANAGER_SERVICE
public static final java.lang.String android.content.Context.BACKUP_SERVICE
public static final java.lang.String android.content.Context.BATTERY_SERVICE
public static final int android.content.Context.BIND_ABOVE_CLIENT
public static final int android.content.Context.BIND_ADJUST_WITH_ACTIVITY
public static final int android.content.Context.BIND_ALLOW_OOM_MANAGEMENT
public static final int android.content.Context.BIND_ALLOW_WHITELIST_MANAGEMENT
public static final int android.content.Context.BIND_AUTO_CREATE
public static final int android.content.Context.BIND_DEBUG_UNBIND
public static final int android.content.Context.BIND_EXTERNAL_SERVICE
public static final int android.content.Context.BIND_FOREGROUND_SERVICE
public static final int android.content.Context.BIND_FOREGROUND_SERVICE_WHILE_AWAKE
public static final int android.content.Context.BIND_IMPORTANT
public static final int android.content.Context.BIND_IMPORTANT_BACKGROUND
public static final int android.content.Context.BIND_NOT_FOREGROUND
public static final int android.content.Context.BIND_NOT_VISIBLE
public static final int android.content.Context.BIND_SHOWING_UI
public static final int android.content.Context.BIND_TREAT_LIKE_ACTIVITY
public static final int android.content.Context.BIND_VISIBLE
public static final int android.content.Context.BIND_WAIVE_PRIORITY
public static final java.lang.String android.content.Context.BLUETOOTH_SERVICE
public static final java.lang.String android.content.Context.CABC_SERVICE
public static final java.lang.String android.content.Context.CAMERA_SERVICE
public static final java.lang.String android.content.Context.CAPTIONING_SERVICE
public static final java.lang.String android.content.Context.CARRIER_CONFIG_SERVICE
public static final java.lang.String android.content.Context.CLIPBOARD_SERVICE
public static final java.lang.String android.content.Context.COMPANION_DEVICE_SERVICE
public static final java.lang.String android.content.Context.CONNECTIVITY_SERVICE
public static final java.lang.String android.content.Context.CONSUMER_IR_SERVICE
public static final java.lang.String android.content.Context.CONTEXTHUB_SERVICE
public static final int android.content.Context.CONTEXT_CREDENTIAL_PROTECTED_STORAGE
public static final int android.content.Context.CONTEXT_DEVICE_PROTECTED_STORAGE
public static final int android.content.Context.CONTEXT_IGNORE_SECURITY
public static final int android.content.Context.CONTEXT_INCLUDE_CODE
public static final int android.content.Context.CONTEXT_REGISTER_PACKAGE
public static final int android.content.Context.CONTEXT_RESTRICTED
public static final java.lang.String android.content.Context.COUNTRY_DETECTOR
public static final java.lang.String android.content.Context.DEVICE_IDENTIFIERS_SERVICE
public static final java.lang.String android.content.Context.DEVICE_IDLE_CONTROLLER
public static final java.lang.String android.content.Context.DEVICE_POLICY_SERVICE
public static final java.lang.String android.content.Context.DISPLAY_SERVICE
public static final java.lang.String android.content.Context.DOWNLOAD_SERVICE
public static final java.lang.String android.content.Context.DROPBOX_SERVICE
public static final java.lang.String android.content.Context.ENGINEER_SERVICE
public static final java.lang.String android.content.Context.ETHERNET_SERVICE
public static final java.lang.String android.content.Context.EUICC_SERVICE
public static final java.lang.String android.content.Context.FACE_SERVICE
public static final java.lang.String android.content.Context.FINGERPRINT_SERVICE
public static final java.lang.String android.content.Context.GATEKEEPER_SERVICE
public static final java.lang.String android.content.Context.HARDWARE_PROPERTIES_SERVICE
public static final java.lang.String android.content.Context.HDMI_CONTROL_SERVICE
public static final java.lang.String android.content.Context.HYPNUS_SERVICE
public static final java.lang.String android.content.Context.INCIDENT_SERVICE
public static final java.lang.String android.content.Context.INPUT_METHOD_SERVICE
public static final java.lang.String android.content.Context.INPUT_SERVICE
public static final java.lang.String android.content.Context.IPSEC_SERVICE
public static final java.lang.String android.content.Context.JOB_SCHEDULER_SERVICE
public static final java.lang.String android.content.Context.KEYGUARD_SERVICE
public static final java.lang.String android.content.Context.LAUNCHER_APPS_SERVICE
public static final java.lang.String android.content.Context.LAYOUT_INFLATER_SERVICE
public static final java.lang.String android.content.Context.LOCATION_SERVICE
public static final java.lang.String android.content.Context.LOWPAN_SERVICE
public static final java.lang.String android.content.Context.LUCKY_MONEY_SERVICE
public static final java.lang.String android.content.Context.MEDIA_PROJECTION_SERVICE
public static final java.lang.String android.content.Context.MEDIA_ROUTER_SERVICE
public static final java.lang.String android.content.Context.MEDIA_SESSION_SERVICE
public static final java.lang.String android.content.Context.MIDI_SERVICE
public static final int android.content.Context.MODE_APPEND
public static final int android.content.Context.MODE_ENABLE_WRITE_AHEAD_LOGGING
public static final int android.content.Context.MODE_MULTI_PROCESS
public static final int android.content.Context.MODE_NO_LOCALIZED_COLLATORS
public static final int android.content.Context.MODE_PRIVATE
public static final int android.content.Context.MODE_WORLD_READABLE
public static final int android.content.Context.MODE_WORLD_WRITEABLE
public static final java.lang.String android.content.Context.NETWORKMANAGEMENT_SERVICE
public static final java.lang.String android.content.Context.NETWORK_POLICY_SERVICE
public static final java.lang.String android.content.Context.NETWORK_SCORE_SERVICE
public static final java.lang.String android.content.Context.NETWORK_STATS_SERVICE
public static final java.lang.String android.content.Context.NFC_SERVICE
public static final java.lang.String android.content.Context.NOTIFICATION_SERVICE
public static final java.lang.String android.content.Context.NSD_SERVICE
public static final java.lang.String android.content.Context.OEM_LOCK_SERVICE
public static final java.lang.String android.content.Context.OPPO_ROUNDCONER_SERVICE
public static final java.lang.String android.content.Context.OVERLAY_SERVICE
public static final java.lang.String android.content.Context.PERSISTENT_DATA_BLOCK_SERVICE
public static final java.lang.String android.content.Context.POWER_MONITOR_SERVICE
public static final java.lang.String android.content.Context.POWER_SERVICE
public static final java.lang.String android.content.Context.PRINT_SERVICE
public static final java.lang.String android.content.Context.RADIO_SERVICE
public static final int android.content.Context.RECEIVER_VISIBLE_TO_INSTANT_APPS
public static final java.lang.String android.content.Context.RECOVERY_SERVICE
public static final java.lang.String android.content.Context.RESTRICTIONS_SERVICE
public static final java.lang.String android.content.Context.SEARCH_SERVICE
public static final java.lang.String android.content.Context.SECRECY_SERVICE
public static final java.lang.String android.content.Context.SENSOR_SERVICE
public static final java.lang.String android.content.Context.SERIAL_SERVICE
public static final java.lang.String android.content.Context.SHORTCUT_SERVICE
public static final java.lang.String android.content.Context.SIP_SERVICE
public static final java.lang.String android.content.Context.SOUND_TRIGGER_SERVICE
public static final java.lang.String android.content.Context.STATUS_BAR_SERVICE
public static final java.lang.String android.content.Context.STORAGE_SERVICE
public static final java.lang.String android.content.Context.STORAGE_STATS_SERVICE
public static final java.lang.String android.content.Context.SYSTEM_HEALTH_SERVICE
public static final java.lang.String android.content.Context.TELECOM_SERVICE
public static final java.lang.String android.content.Context.TELEPHONY_SERVICE
public static final java.lang.String android.content.Context.TELEPHONY_SUBSCRIPTION_SERVICE
public static final java.lang.String android.content.Context.TEXT_CLASSIFICATION_SERVICE
public static final java.lang.String android.content.Context.TEXT_SERVICES_MANAGER_SERVICE
public static final java.lang.String android.content.Context.TIME_ZONE_RULES_MANAGER_SERVICE
public static final java.lang.String android.content.Context.TRUST_SERVICE
public static final java.lang.String android.content.Context.TV_INPUT_SERVICE
public static final java.lang.String android.content.Context.UI_MODE_SERVICE
public static final java.lang.String android.content.Context.UPDATE_LOCK_SERVICE
public static final java.lang.String android.content.Context.USAGE_STATS_SERVICE
public static final java.lang.String android.content.Context.USB_SERVICE
public static final java.lang.String android.content.Context.USER_SERVICE
public static final java.lang.String android.content.Context.VIBRATOR_SERVICE
public static final java.lang.String android.content.Context.VOICE_INTERACTION_MANAGER_SERVICE
public static final java.lang.String android.content.Context.VR_SERVICE
public static final java.lang.String android.content.Context.WALLPAPER_SERVICE
public static final java.lang.String android.content.Context.WIFI_AWARE_SERVICE
public static final java.lang.String android.content.Context.WIFI_P2P_SERVICE
public static final java.lang.String android.content.Context.WIFI_RTT_SERVICE
public static final java.lang.String android.content.Context.WIFI_SCANNING_SERVICE
public static final java.lang.String android.content.Context.WIFI_SERVICE
public static final java.lang.String android.content.Context.WINDOW_SERVICE
public static final int android.content.ComponentCallbacks2.TRIM_MEMORY_BACKGROUND
public static final int android.content.ComponentCallbacks2.TRIM_MEMORY_COMPLETE
public static final int android.content.ComponentCallbacks2.TRIM_MEMORY_MODERATE
public static final int android.content.ComponentCallbacks2.TRIM_MEMORY_RUNNING_CRITICAL
public static final int android.content.ComponentCallbacks2.TRIM_MEMORY_RUNNING_LOW
public static final int android.content.ComponentCallbacks2.TRIM_MEMORY_RUNNING_MODERATE
public static final int android.content.ComponentCallbacks2.TRIM_MEMORY_UI_HIDDEN

AllMethods: 
public void android.app.Activity.addContentView(android.view.View,android.view.ViewGroup$LayoutParams)
public void android.view.ContextThemeWrapper.applyOverrideConfiguration(android.content.res.Configuration)
public void android.content.Context.assertRuntimeOverlayThemable()
public final void android.app.Activity.autofillCallbackAuthenticate(int,android.content.IntentSender,android.content.Intent)
public final boolean android.app.Activity.autofillCallbackRequestHideFillUi()
public final boolean android.app.Activity.autofillCallbackRequestShowFillUi(android.view.View,int,int,android.graphics.Rect,android.view.autofill.IAutofillWindowPresenter)
public final void android.app.Activity.autofillCallbackResetableStateAvailable()
public boolean android.content.ContextWrapper.bindService(android.content.Intent,android.content.ServiceConnection,int)
public boolean android.content.ContextWrapper.bindServiceAsUser(android.content.Intent,android.content.ServiceConnection,int,android.os.UserHandle)
public boolean android.content.ContextWrapper.bindServiceAsUser(android.content.Intent,android.content.ServiceConnection,int,android.os.Handler,android.os.UserHandle)
public boolean android.content.ContextWrapper.canLoadUnsafeResources()
public boolean android.app.Activity.canStartActivityForResult()
public int android.content.ContextWrapper.checkCallingOrSelfPermission(java.lang.String)
public int android.content.ContextWrapper.checkCallingOrSelfUriPermission(android.net.Uri,int)
public int android.content.ContextWrapper.checkCallingPermission(java.lang.String)
public int android.content.ContextWrapper.checkCallingUriPermission(android.net.Uri,int)
public int android.content.ContextWrapper.checkPermission(java.lang.String,int,int)
public int android.content.ContextWrapper.checkPermission(java.lang.String,int,int,android.os.IBinder)
public int android.content.ContextWrapper.checkSelfPermission(java.lang.String)
public int android.content.ContextWrapper.checkUriPermission(android.net.Uri,int,int,int)
public int android.content.ContextWrapper.checkUriPermission(android.net.Uri,int,int,int,android.os.IBinder)
public int android.content.ContextWrapper.checkUriPermission(android.net.Uri,java.lang.String,java.lang.String,int,int,int)
public void android.content.ContextWrapper.clearWallpaper() throws java.io.IOException
public void android.app.Activity.closeContextMenu()
public void android.app.Activity.closeOptionsMenu()
public void android.app.Activity.convertFromTranslucent()
public boolean android.app.Activity.convertToTranslucent(android.app.Activity$TranslucentConversionListener,android.app.ActivityOptions)
public android.content.Context android.content.ContextWrapper.createApplicationContext(android.content.pm.ApplicationInfo,int) throws android.content.pm.PackageManager$NameNotFoundException
public android.content.Context android.content.ContextWrapper.createConfigurationContext(android.content.res.Configuration)
public android.content.Context android.content.ContextWrapper.createContextForSplit(java.lang.String) throws android.content.pm.PackageManager$NameNotFoundException
public android.content.Context android.content.ContextWrapper.createCredentialProtectedStorageContext()
public android.content.Context android.content.ContextWrapper.createDeviceProtectedStorageContext()
public android.content.Context android.content.ContextWrapper.createDisplayContext(android.view.Display)
public android.content.Context android.content.ContextWrapper.createPackageContext(java.lang.String,int) throws android.content.pm.PackageManager$NameNotFoundException
public android.content.Context android.content.ContextWrapper.createPackageContextAsUser(java.lang.String,int,android.os.UserHandle) throws android.content.pm.PackageManager$NameNotFoundException
public android.app.PendingIntent android.app.Activity.createPendingResult(int,android.content.Intent,int)
public java.lang.String[] android.content.ContextWrapper.databaseList()
public boolean android.content.ContextWrapper.deleteDatabase(java.lang.String)
public boolean android.content.ContextWrapper.deleteFile(java.lang.String)
public boolean android.content.ContextWrapper.deleteSharedPreferences(java.lang.String)
public final void android.app.Activity.dismissDialog(int)
public final void android.app.Activity.dismissKeyboardShortcutsHelper()
public void android.app.Activity.dispatchEnterAnimationComplete()
public boolean android.app.Activity.dispatchGenericMotionEvent(android.view.MotionEvent)
public boolean android.app.Activity.dispatchKeyEvent(android.view.KeyEvent)
public boolean android.app.Activity.dispatchKeyShortcutEvent(android.view.KeyEvent)
public boolean android.app.Activity.dispatchPopulateAccessibilityEvent(android.view.accessibility.AccessibilityEvent)
public boolean android.app.Activity.dispatchTouchEvent(android.view.MotionEvent)
public boolean android.app.Activity.dispatchTrackballEvent(android.view.MotionEvent)
public void android.app.Activity.dump(java.lang.String,java.io.FileDescriptor,java.io.PrintWriter,java.lang.String[])
public void android.content.ContextWrapper.enforceCallingOrSelfPermission(java.lang.String,java.lang.String)
public void android.content.ContextWrapper.enforceCallingOrSelfUriPermission(android.net.Uri,int,java.lang.String)
public void android.content.ContextWrapper.enforceCallingPermission(java.lang.String,java.lang.String)
public void android.content.ContextWrapper.enforceCallingUriPermission(android.net.Uri,int,java.lang.String)
public void android.content.ContextWrapper.enforcePermission(java.lang.String,int,int,java.lang.String)
public void android.content.ContextWrapper.enforceUriPermission(android.net.Uri,int,int,int,java.lang.String)
public void android.content.ContextWrapper.enforceUriPermission(android.net.Uri,java.lang.String,java.lang.String,int,int,int,java.lang.String)
public void android.app.Activity.enterPictureInPictureMode()
public boolean android.app.Activity.enterPictureInPictureMode(android.app.PictureInPictureArgs)
public boolean android.app.Activity.enterPictureInPictureMode(android.app.PictureInPictureParams)
public void android.app.Activity.enterPictureInPictureModeIfPossible()
public boolean java.lang.Object.equals(java.lang.Object)
public void android.app.Activity.exitFreeformMode() throws android.os.RemoteException
public java.lang.String[] android.content.ContextWrapper.fileList()
public android.view.View android.app.Activity.findViewByAutofillIdTraversal(int)
public android.view.View android.app.Activity.findViewById(int)
public android.view.View[] android.app.Activity.findViewsByAutofillIdTraversal(int[])
public void android.app.Activity.finish()
public void android.app.Activity.finishActivity(int)
public void android.app.Activity.finishActivityFromChild(android.app.Activity,int)
public void android.app.Activity.finishAffinity()
public void android.app.Activity.finishAfterTransition()
public void android.app.Activity.finishAndRemoveTask()
public void android.app.Activity.finishFromChild(android.app.Activity)
public android.app.ActionBar android.app.Activity.getActionBar()
public final android.os.IBinder android.app.Activity.getActivityToken()
public final android.app.Application android.app.Activity.getApplication()
public android.content.Context android.content.ContextWrapper.getApplicationContext()
public android.content.pm.ApplicationInfo android.content.ContextWrapper.getApplicationInfo()
public android.content.res.AssetManager android.view.ContextThemeWrapper.getAssets()
public final android.view.autofill.AutofillManager$AutofillClient android.app.Activity.getAutofillClient()
public android.content.Context android.content.ContextWrapper.getBaseContext()
public java.lang.String android.content.ContextWrapper.getBasePackageName()
public java.io.File android.content.ContextWrapper.getCacheDir()
public android.content.ComponentName android.app.Activity.getCallingActivity()
public java.lang.String android.app.Activity.getCallingPackage()
public int android.app.Activity.getChangingConfigurations()
public final java.lang.Class java.lang.Object.getClass()
public java.lang.ClassLoader android.content.ContextWrapper.getClassLoader()
public java.io.File android.content.ContextWrapper.getCodeCacheDir()
public final int android.content.Context.getColor(int)
public final android.content.res.ColorStateList android.content.Context.getColorStateList(int)
public android.content.ComponentName android.app.Activity.getComponentName()
public android.content.ComponentName android.app.Activity.getComponentNameForAutofill()
public android.content.ContentResolver android.content.ContextWrapper.getContentResolver()
public android.transition.Scene android.app.Activity.getContentScene()
public android.transition.TransitionManager android.app.Activity.getContentTransitionManager()
public android.view.View android.app.Activity.getCurrentFocus()
public java.io.File android.content.ContextWrapper.getDataDir()
public java.io.File android.content.ContextWrapper.getDatabasePath(java.lang.String)
public java.io.File android.content.ContextWrapper.getDir(java.lang.String,int)
public boolean android.content.Context.getDirectionAnyRtl()
public android.view.Display android.content.ContextWrapper.getDisplay()
public android.view.DisplayAdjustments android.content.ContextWrapper.getDisplayAdjustments(int)
public final android.graphics.drawable.Drawable android.content.Context.getDrawable(int)
public java.io.File android.content.ContextWrapper.getExternalCacheDir()
public java.io.File[] android.content.ContextWrapper.getExternalCacheDirs()
public java.io.File android.content.ContextWrapper.getExternalFilesDir(java.lang.String)
public java.io.File[] android.content.ContextWrapper.getExternalFilesDirs(java.lang.String)
public java.io.File[] android.content.ContextWrapper.getExternalMediaDirs()
public java.io.File android.content.ContextWrapper.getFileStreamPath(java.lang.String)
public java.io.File android.content.ContextWrapper.getFilesDir()
public android.app.FragmentManager android.app.Activity.getFragmentManager()
public android.app.IApplicationThread android.content.ContextWrapper.getIApplicationThread()
public android.content.Intent android.app.Activity.getIntent()
public java.lang.Object android.app.Activity.getLastNonConfigurationInstance()
public android.view.LayoutInflater android.app.Activity.getLayoutInflater()
public android.app.LoaderManager android.app.Activity.getLoaderManager()
public java.lang.String android.app.Activity.getLocalClassName()
public android.os.Looper android.content.ContextWrapper.getMainLooper()
public android.os.Handler android.content.ContextWrapper.getMainThreadHandler()
public int android.app.Activity.getMaxNumPictureInPictureActions()
public final android.media.session.MediaController android.app.Activity.getMediaController()
public android.view.MenuInflater android.app.Activity.getMenuInflater()
public int android.app.Activity.getNextAutofillId()
public java.io.File android.content.ContextWrapper.getNoBackupFilesDir()
public java.io.File android.content.ContextWrapper.getObbDir()
public java.io.File[] android.content.ContextWrapper.getObbDirs()
public java.lang.String android.content.ContextWrapper.getOpPackageName()
public boolean android.content.Context.getOppoSupportRtl()
public android.content.res.Configuration android.view.ContextThemeWrapper.getOverrideConfiguration()
public java.lang.String android.content.ContextWrapper.getPackageCodePath()
public android.content.pm.PackageManager android.content.ContextWrapper.getPackageManager()
public java.lang.String android.content.ContextWrapper.getPackageName()
public java.lang.String android.content.ContextWrapper.getPackageResourcePath()
public final android.app.Activity android.app.Activity.getParent()
public android.content.Intent android.app.Activity.getParentActivityIntent()
public android.content.SharedPreferences android.app.Activity.getPreferences(int)
public java.io.File android.content.ContextWrapper.getPreloadsFileCache()
public android.net.Uri android.app.Activity.getReferrer()
public int android.app.Activity.getRequestedOrientation()
public android.content.res.Resources android.view.ContextThemeWrapper.getResources()
public final android.view.SearchEvent android.app.Activity.getSearchEvent()
public android.app.IServiceConnection android.content.ContextWrapper.getServiceDispatcher(android.content.ServiceConnection,android.os.Handler,int)
public android.content.SharedPreferences android.content.ContextWrapper.getSharedPreferences(java.io.File,int)
public android.content.SharedPreferences android.content.ContextWrapper.getSharedPreferences(java.lang.String,int)
public java.io.File android.content.ContextWrapper.getSharedPreferencesPath(java.lang.String)
public java.io.File android.content.Context.getSharedPrefsFile(java.lang.String)
public final java.lang.String android.content.Context.getString(int)
public final java.lang.String android.content.Context.getString(int,java.lang.Object[])
public final java.lang.Object android.content.Context.getSystemService(java.lang.Class)
public java.lang.Object android.app.Activity.getSystemService(java.lang.String)
public java.lang.String android.content.ContextWrapper.getSystemServiceName(java.lang.Class)
public int android.app.Activity.getTaskId()
public final java.lang.CharSequence android.content.Context.getText(int)
public boolean android.content.Context.getTextViewStart()
public android.content.res.Resources$Theme android.view.ContextThemeWrapper.getTheme()
public int android.view.ContextThemeWrapper.getThemeResId()
public final java.lang.CharSequence android.app.Activity.getTitle()
public final int android.app.Activity.getTitleColor()
public int android.content.ContextWrapper.getUserId()
public boolean[] android.app.Activity.getViewVisibility(int[])
public android.app.VoiceInteractor android.app.Activity.getVoiceInteractor()
public final int android.app.Activity.getVolumeControlStream()
public android.graphics.drawable.Drawable android.content.ContextWrapper.getWallpaper()
public int android.content.ContextWrapper.getWallpaperDesiredMinimumHeight()
public int android.content.ContextWrapper.getWallpaperDesiredMinimumWidth()
public android.view.Window android.app.Activity.getWindow()
public android.view.WindowManager android.app.Activity.getWindowManager()
public int android.app.Activity.getWindowStackId() throws android.os.RemoteException
public void android.content.ContextWrapper.grantUriPermission(java.lang.String,android.net.Uri,int)
public boolean android.app.Activity.hasWindowFocus()
public int java.lang.Object.hashCode()
public void android.content.Context.initRtlParameter(android.content.res.Resources)
public void android.app.Activity.invalidateOptionsMenu()
public boolean android.app.Activity.isActivityTransitionRunning()
public boolean android.app.Activity.isBackgroundVisibleBehind()
public boolean android.app.Activity.isChangingConfigurations()
public final boolean android.app.Activity.isChild()
public boolean android.content.ContextWrapper.isCredentialProtectedStorage()
public boolean android.app.Activity.isDestroyed()
public boolean android.content.ContextWrapper.isDeviceProtectedStorage()
public boolean android.app.Activity.isFinishing()
public boolean android.app.Activity.isImmersive()
public boolean android.app.Activity.isInMultiWindowMode()
public boolean android.app.Activity.isInPictureInPictureMode()
public boolean android.app.Activity.isLocalVoiceInteractionSupported()
public boolean android.content.Context.isOppoStyle()
public boolean android.app.Activity.isOverlayWithDecorCaptionEnabled()
public boolean android.content.ContextWrapper.isRestricted()
public final boolean android.app.Activity.isResumed()
public boolean android.app.Activity.isTaskRoot()
public boolean android.app.Activity.isVisibleForAutofill()
public boolean android.app.Activity.isVoiceInteraction()
public boolean android.app.Activity.isVoiceInteractionRoot()
public final android.database.Cursor android.app.Activity.managedQuery(android.net.Uri,java.lang.String[],java.lang.String,java.lang.String)
public final android.database.Cursor android.app.Activity.managedQuery(android.net.Uri,java.lang.String[],java.lang.String,java.lang.String[],java.lang.String)
public boolean android.content.ContextWrapper.moveDatabaseFrom(android.content.Context,java.lang.String)
public boolean android.content.ContextWrapper.moveSharedPreferencesFrom(android.content.Context,java.lang.String)
public boolean android.app.Activity.moveTaskToBack(boolean)
public boolean android.app.Activity.navigateUpTo(android.content.Intent)
public boolean android.app.Activity.navigateUpToFromChild(android.app.Activity,android.content.Intent)
public final native void java.lang.Object.notify()
public final native void java.lang.Object.notifyAll()
public final android.content.res.TypedArray android.content.Context.obtainStyledAttributes(int[])
public final android.content.res.TypedArray android.content.Context.obtainStyledAttributes(int,int[]) throws android.content.res.Resources$NotFoundException
public final android.content.res.TypedArray android.content.Context.obtainStyledAttributes(android.util.AttributeSet,int[])
public final android.content.res.TypedArray android.content.Context.obtainStyledAttributes(android.util.AttributeSet,int[],int,int)
public void android.app.Activity.onActionModeFinished(android.view.ActionMode)
public void android.app.Activity.onActionModeStarted(android.view.ActionMode)
public void android.app.Activity.onActivityReenter(int,android.content.Intent)
public void android.app.Activity.onAttachFragment(android.app.Fragment)
public void android.app.Activity.onAttachedToWindow()
public void android.app.Activity.onBackPressed()
public void android.app.Activity.onBackgroundVisibleBehindChanged(boolean)
public void android.app.Activity.onConfigurationChanged(android.content.res.Configuration)
public void android.app.Activity.onContentChanged()
public boolean android.app.Activity.onContextItemSelected(android.view.MenuItem)
public void android.app.Activity.onContextMenuClosed(android.view.Menu)
public void android.app.Activity.onCreate(android.os.Bundle,android.os.PersistableBundle)
public void android.app.Activity.onCreateContextMenu(android.view.ContextMenu,android.view.View,android.view.ContextMenu$ContextMenuInfo)
public java.lang.CharSequence android.app.Activity.onCreateDescription()
public void android.app.Activity.onCreateNavigateUpTaskStack(android.app.TaskStackBuilder)
public boolean android.app.Activity.onCreateOptionsMenu(android.view.Menu)
public boolean android.app.Activity.onCreatePanelMenu(int,android.view.Menu)
public android.view.View android.app.Activity.onCreatePanelView(int)
public boolean android.app.Activity.onCreateThumbnail(android.graphics.Bitmap,android.graphics.Canvas)
public android.view.View android.app.Activity.onCreateView(java.lang.String,android.content.Context,android.util.AttributeSet)
public android.view.View android.app.Activity.onCreateView(android.view.View,java.lang.String,android.content.Context,android.util.AttributeSet)
public void android.app.Activity.onDetachedFromWindow()
public void android.app.Activity.onEnterAnimationComplete()
public boolean android.app.Activity.onGenericMotionEvent(android.view.MotionEvent)
public boolean android.app.Activity.onKeyDown(int,android.view.KeyEvent)
public boolean android.app.Activity.onKeyLongPress(int,android.view.KeyEvent)
public boolean android.app.Activity.onKeyMultiple(int,int,android.view.KeyEvent)
public boolean android.app.Activity.onKeyShortcut(int,android.view.KeyEvent)
public boolean android.app.Activity.onKeyUp(int,android.view.KeyEvent)
public void android.app.Activity.onLocalVoiceInteractionStarted()
public void android.app.Activity.onLocalVoiceInteractionStopped()
public void android.app.Activity.onLowMemory()
public boolean android.app.Activity.onMenuItemSelected(int,android.view.MenuItem)
public boolean android.app.Activity.onMenuOpened(int,android.view.Menu)
public void android.app.Activity.onMovedToDisplay(int,android.content.res.Configuration)
public void android.app.Activity.onMultiWindowModeChanged(boolean)
public void android.app.Activity.onMultiWindowModeChanged(boolean,android.content.res.Configuration)
public boolean android.app.Activity.onNavigateUp()
public boolean android.app.Activity.onNavigateUpFromChild(android.app.Activity)
public void android.app.Activity.onNewActivityOptions(android.app.ActivityOptions)
public boolean android.app.Activity.onOptionsItemSelected(android.view.MenuItem)
public void android.app.Activity.onOptionsMenuClosed(android.view.Menu)
public void android.app.Activity.onPanelClosed(int,android.view.Menu)
public void android.app.Activity.onPictureInPictureModeChanged(boolean)
public void android.app.Activity.onPictureInPictureModeChanged(boolean,android.content.res.Configuration)
public default void android.view.Window$Callback.onPointerCaptureChanged(boolean)
public void android.app.Activity.onPostCreate(android.os.Bundle,android.os.PersistableBundle)
public void android.app.Activity.onPrepareNavigateUpTaskStack(android.app.TaskStackBuilder)
public boolean android.app.Activity.onPrepareOptionsMenu(android.view.Menu)
public boolean android.app.Activity.onPreparePanel(int,android.view.View,android.view.Menu)
public void android.app.Activity.onProvideAssistContent(android.app.assist.AssistContent)
public void android.app.Activity.onProvideAssistData(android.os.Bundle)
public void android.app.Activity.onProvideKeyboardShortcuts(java.util.List,android.view.Menu,int)
public android.net.Uri android.app.Activity.onProvideReferrer()
public void android.app.Activity.onRequestPermissionsResult(int,java.lang.String[],int[])
public void android.app.Activity.onRestoreInstanceState(android.os.Bundle,android.os.PersistableBundle)
public java.lang.Object android.app.Activity.onRetainNonConfigurationInstance()
public void android.app.Activity.onSaveInstanceState(android.os.Bundle,android.os.PersistableBundle)
public boolean android.app.Activity.onSearchRequested()
public boolean android.app.Activity.onSearchRequested(android.view.SearchEvent)
public void android.app.Activity.onStateNotSaved()
public boolean android.app.Activity.onTouchEvent(android.view.MotionEvent)
public boolean android.app.Activity.onTrackballEvent(android.view.MotionEvent)
public void android.app.Activity.onTrimMemory(int)
public void android.app.Activity.onUserInteraction()
public void android.app.Activity.onVisibleBehindCanceled()
public void android.app.Activity.onWindowAttributesChanged(android.view.WindowManager$LayoutParams)
public void android.app.Activity.onWindowDismissed(boolean,boolean)
public void android.app.Activity.onWindowFocusChanged(boolean)
public android.view.ActionMode android.app.Activity.onWindowStartingActionMode(android.view.ActionMode$Callback)
public android.view.ActionMode android.app.Activity.onWindowStartingActionMode(android.view.ActionMode$Callback,int)
public void android.app.Activity.openContextMenu(android.view.View)
public java.io.FileInputStream android.content.ContextWrapper.openFileInput(java.lang.String) throws java.io.FileNotFoundException
public java.io.FileOutputStream android.content.ContextWrapper.openFileOutput(java.lang.String,int) throws java.io.FileNotFoundException
public void android.app.Activity.openOptionsMenu()
public android.database.sqlite.SQLiteDatabase android.content.ContextWrapper.openOrCreateDatabase(java.lang.String,int,android.database.sqlite.SQLiteDatabase$CursorFactory)
public android.database.sqlite.SQLiteDatabase android.content.ContextWrapper.openOrCreateDatabase(java.lang.String,int,android.database.sqlite.SQLiteDatabase$CursorFactory,android.database.DatabaseErrorHandler)
public void android.app.Activity.overridePendingTransition(int,int)
public android.graphics.drawable.Drawable android.content.ContextWrapper.peekWallpaper()
public void android.app.Activity.postponeEnterTransition()
public void android.app.Activity.recreate()
public void android.content.Context.registerComponentCallbacks(android.content.ComponentCallbacks)
public void android.app.Activity.registerForContextMenu(android.view.View)
public android.content.Intent android.content.ContextWrapper.registerReceiver(android.content.BroadcastReceiver,android.content.IntentFilter)
public android.content.Intent android.content.ContextWrapper.registerReceiver(android.content.BroadcastReceiver,android.content.IntentFilter,int)
public android.content.Intent android.content.ContextWrapper.registerReceiver(android.content.BroadcastReceiver,android.content.IntentFilter,java.lang.String,android.os.Handler)
public android.content.Intent android.content.ContextWrapper.registerReceiver(android.content.BroadcastReceiver,android.content.IntentFilter,java.lang.String,android.os.Handler,int)
public android.content.Intent android.content.ContextWrapper.registerReceiverAsUser(android.content.BroadcastReceiver,android.os.UserHandle,android.content.IntentFilter,java.lang.String,android.os.Handler)
public boolean android.app.Activity.releaseInstance()
public void android.content.ContextWrapper.reloadSharedPreferences()
public final void android.app.Activity.removeDialog(int)
public void android.content.ContextWrapper.removeStickyBroadcast(android.content.Intent)
public void android.content.ContextWrapper.removeStickyBroadcastAsUser(android.content.Intent,android.os.UserHandle)
public void android.app.Activity.reportFullyDrawn()
public android.view.DragAndDropPermissions android.app.Activity.requestDragAndDropPermissions(android.view.DragEvent)
public final void android.app.Activity.requestPermissions(java.lang.String[],int)
public final void android.app.Activity.requestShowKeyboardShortcuts()
public boolean android.app.Activity.requestVisibleBehind(boolean)
public final boolean android.app.Activity.requestWindowFeature(int)
public void android.content.ContextWrapper.revokeUriPermission(android.net.Uri,int)
public void android.content.ContextWrapper.revokeUriPermission(java.lang.String,android.net.Uri,int)
public final void android.app.Activity.runOnUiThread(java.lang.Runnable)
public void android.content.ContextWrapper.sendBroadcast(android.content.Intent)
public void android.content.ContextWrapper.sendBroadcast(android.content.Intent,java.lang.String)
public void android.content.ContextWrapper.sendBroadcast(android.content.Intent,java.lang.String,int)
public void android.content.ContextWrapper.sendBroadcast(android.content.Intent,java.lang.String,android.os.Bundle)
public void android.content.ContextWrapper.sendBroadcastAsUser(android.content.Intent,android.os.UserHandle)
public void android.content.ContextWrapper.sendBroadcastAsUser(android.content.Intent,android.os.UserHandle,java.lang.String)
public void android.content.ContextWrapper.sendBroadcastAsUser(android.content.Intent,android.os.UserHandle,java.lang.String,int)
public void android.content.ContextWrapper.sendBroadcastAsUser(android.content.Intent,android.os.UserHandle,java.lang.String,android.os.Bundle)
public void android.content.ContextWrapper.sendBroadcastMultiplePermissions(android.content.Intent,java.lang.String[])
public void android.content.ContextWrapper.sendOrderedBroadcast(android.content.Intent,java.lang.String)
public void android.content.ContextWrapper.sendOrderedBroadcast(android.content.Intent,java.lang.String,android.content.BroadcastReceiver,android.os.Handler,int,java.lang.String,android.os.Bundle)
public void android.content.ContextWrapper.sendOrderedBroadcast(android.content.Intent,java.lang.String,int,android.content.BroadcastReceiver,android.os.Handler,int,java.lang.String,android.os.Bundle)
public void android.content.ContextWrapper.sendOrderedBroadcast(android.content.Intent,java.lang.String,android.os.Bundle,android.content.BroadcastReceiver,android.os.Handler,int,java.lang.String,android.os.Bundle)
public void android.content.ContextWrapper.sendOrderedBroadcastAsUser(android.content.Intent,android.os.UserHandle,java.lang.String,android.content.BroadcastReceiver,android.os.Handler,int,java.lang.String,android.os.Bundle)
public void android.content.ContextWrapper.sendOrderedBroadcastAsUser(android.content.Intent,android.os.UserHandle,java.lang.String,int,android.content.BroadcastReceiver,android.os.Handler,int,java.lang.String,android.os.Bundle)
public void android.content.ContextWrapper.sendOrderedBroadcastAsUser(android.content.Intent,android.os.UserHandle,java.lang.String,int,android.os.Bundle,android.content.BroadcastReceiver,android.os.Handler,int,java.lang.String,android.os.Bundle)
public void android.content.ContextWrapper.sendStickyBroadcast(android.content.Intent)
public void android.content.ContextWrapper.sendStickyBroadcastAsUser(android.content.Intent,android.os.UserHandle)
public void android.content.ContextWrapper.sendStickyBroadcastAsUser(android.content.Intent,android.os.UserHandle,android.os.Bundle)
public void android.content.ContextWrapper.sendStickyOrderedBroadcast(android.content.Intent,android.content.BroadcastReceiver,android.os.Handler,int,java.lang.String,android.os.Bundle)
public void android.content.ContextWrapper.sendStickyOrderedBroadcastAsUser(android.content.Intent,android.os.UserHandle,android.content.BroadcastReceiver,android.os.Handler,int,java.lang.String,android.os.Bundle)
public void android.app.Activity.setActionBar(android.widget.Toolbar)
public void android.content.ContextWrapper.setAutofillClient(android.view.autofill.AutofillManager$AutofillClient)
public void android.app.Activity.setBoostAnimation(boolean)
public void android.app.Activity.setContentTransitionManager(android.transition.TransitionManager)
public void android.app.Activity.setContentView(int)
public void android.app.Activity.setContentView(android.view.View)
public void android.app.Activity.setContentView(android.view.View,android.view.ViewGroup$LayoutParams)
public final void android.app.Activity.setDefaultKeyMode(int)
public void android.app.Activity.setDisablePreviewScreenshots(boolean)
public void android.app.Activity.setEnterSharedElementCallback(android.app.SharedElementCallback)
public void android.app.Activity.setExitSharedElementCallback(android.app.SharedElementCallback)
public final void android.app.Activity.setFeatureDrawable(int,android.graphics.drawable.Drawable)
public final void android.app.Activity.setFeatureDrawableAlpha(int,int)
public final void android.app.Activity.setFeatureDrawableResource(int,int)
public final void android.app.Activity.setFeatureDrawableUri(int,android.net.Uri)
public void android.app.Activity.setFinishOnTouchOutside(boolean)
public void android.app.Activity.setImmersive(boolean)
public void android.app.Activity.setIntent(android.content.Intent)
public final void android.app.Activity.setMediaController(android.media.session.MediaController)
public void android.app.Activity.setOverlayWithDecorCaptionEnabled(boolean)
public void android.app.Activity.setPersistent(boolean)
public void android.app.Activity.setPictureInPictureArgs(android.app.PictureInPictureArgs)
public void android.app.Activity.setPictureInPictureParams(android.app.PictureInPictureParams)
public final void android.app.Activity.setProgress(int)
public final void android.app.Activity.setProgressBarIndeterminate(boolean)
public final void android.app.Activity.setProgressBarIndeterminateVisibility(boolean)
public final void android.app.Activity.setProgressBarVisibility(boolean)
public void android.app.Activity.setRequestedOrientation(int)
public final void android.app.Activity.setResult(int)
public final void android.app.Activity.setResult(int,android.content.Intent)
public final void android.app.Activity.setSecondaryProgress(int)
public void android.app.Activity.setShowWhenLocked(boolean)
public void android.app.Activity.setTaskDescription(android.app.ActivityManager$TaskDescription)
public void android.app.Activity.setTheme(int)
public void android.app.Activity.setTitle(int)
public void android.app.Activity.setTitle(java.lang.CharSequence)
public void android.app.Activity.setTitleColor(int)
public void android.app.Activity.setTurnScreenOn(boolean)
public void android.app.Activity.setVisible(boolean)
public final void android.app.Activity.setVolumeControlStream(int)
public void android.app.Activity.setVrModeEnabled(boolean,android.content.ComponentName) throws android.content.pm.PackageManager$NameNotFoundException
public void android.content.ContextWrapper.setWallpaper(android.graphics.Bitmap) throws java.io.IOException
public void android.content.ContextWrapper.setWallpaper(java.io.InputStream) throws java.io.IOException
public boolean android.app.Activity.shouldBoostAnimation()
public boolean android.app.Activity.shouldShowRequestPermissionRationale(java.lang.String)
public boolean android.app.Activity.shouldUpRecreateTask(android.content.Intent)
public boolean android.app.Activity.showAssist(android.os.Bundle)
public final void android.app.Activity.showDialog(int)
public final boolean android.app.Activity.showDialog(int,android.os.Bundle)
public void android.app.Activity.showLockTaskEscapeMessage()
public android.view.ActionMode android.app.Activity.startActionMode(android.view.ActionMode$Callback)
public android.view.ActionMode android.app.Activity.startActionMode(android.view.ActionMode$Callback,int)
public void android.app.Activity.startActivities(android.content.Intent[])
public void android.app.Activity.startActivities(android.content.Intent[],android.os.Bundle)
public void android.content.ContextWrapper.startActivitiesAsUser(android.content.Intent[],android.os.Bundle,android.os.UserHandle)
public void android.app.Activity.startActivity(android.content.Intent)
public void android.app.Activity.startActivity(android.content.Intent,android.os.Bundle)
public void android.app.Activity.startActivityAsCaller(android.content.Intent,android.os.Bundle,boolean,int)
public void android.app.Activity.startActivityAsUser(android.content.Intent,android.os.UserHandle)
public void android.app.Activity.startActivityAsUser(android.content.Intent,android.os.Bundle,android.os.UserHandle)
public void android.app.Activity.startActivityAsUserFromFragment(android.app.Fragment,android.content.Intent,int,android.os.Bundle,android.os.UserHandle)
public void android.app.Activity.startActivityForResult(android.content.Intent,int)
public void android.app.Activity.startActivityForResult(android.content.Intent,int,android.os.Bundle)
public void android.app.Activity.startActivityForResult(java.lang.String,android.content.Intent,int,android.os.Bundle)
public void android.app.Activity.startActivityForResultAsUser(android.content.Intent,int,android.os.UserHandle)
public void android.app.Activity.startActivityForResultAsUser(android.content.Intent,int,android.os.Bundle,android.os.UserHandle)
public void android.app.Activity.startActivityForResultAsUser(android.content.Intent,java.lang.String,int,android.os.Bundle,android.os.UserHandle)
public void android.app.Activity.startActivityFromChild(android.app.Activity,android.content.Intent,int)
public void android.app.Activity.startActivityFromChild(android.app.Activity,android.content.Intent,int,android.os.Bundle)
public void android.app.Activity.startActivityFromFragment(android.app.Fragment,android.content.Intent,int)
public void android.app.Activity.startActivityFromFragment(android.app.Fragment,android.content.Intent,int,android.os.Bundle)
public boolean android.app.Activity.startActivityIfNeeded(android.content.Intent,int)
public boolean android.app.Activity.startActivityIfNeeded(android.content.Intent,int,android.os.Bundle)
public android.content.ComponentName android.content.ContextWrapper.startForegroundService(android.content.Intent)
public android.content.ComponentName android.content.ContextWrapper.startForegroundServiceAsUser(android.content.Intent,android.os.UserHandle)
public boolean android.content.ContextWrapper.startInstrumentation(android.content.ComponentName,java.lang.String,android.os.Bundle)
public void android.app.Activity.startIntentSender(android.content.IntentSender,android.content.Intent,int,int,int) throws android.content.IntentSender$SendIntentException
public void android.app.Activity.startIntentSender(android.content.IntentSender,android.content.Intent,int,int,int,android.os.Bundle) throws android.content.IntentSender$SendIntentException
public void android.app.Activity.startIntentSenderForResult(android.content.IntentSender,int,android.content.Intent,int,int,int) throws android.content.IntentSender$SendIntentException
public void android.app.Activity.startIntentSenderForResult(android.content.IntentSender,int,android.content.Intent,int,int,int,android.os.Bundle) throws android.content.IntentSender$SendIntentException
public void android.app.Activity.startIntentSenderFromChild(android.app.Activity,android.content.IntentSender,int,android.content.Intent,int,int,int) throws android.content.IntentSender$SendIntentException
public void android.app.Activity.startIntentSenderFromChild(android.app.Activity,android.content.IntentSender,int,android.content.Intent,int,int,int,android.os.Bundle) throws android.content.IntentSender$SendIntentException
public void android.app.Activity.startIntentSenderFromChildFragment(android.app.Fragment,android.content.IntentSender,int,android.content.Intent,int,int,int,android.os.Bundle) throws android.content.IntentSender$SendIntentException
public void android.app.Activity.startLocalVoiceInteraction(android.os.Bundle)
public void android.app.Activity.startLockTask()
public void android.app.Activity.startManagingCursor(android.database.Cursor)
public boolean android.app.Activity.startNextMatchingActivity(android.content.Intent)
public boolean android.app.Activity.startNextMatchingActivity(android.content.Intent,android.os.Bundle)
public void android.app.Activity.startPostponedEnterTransition()
public void android.app.Activity.startSearch(java.lang.String,boolean,android.os.Bundle,boolean)
public android.content.ComponentName android.content.ContextWrapper.startService(android.content.Intent)
public android.content.ComponentName android.content.ContextWrapper.startServiceAsUser(android.content.Intent,android.os.UserHandle)
public void android.app.Activity.stopLocalVoiceInteraction()
public void android.app.Activity.stopLockTask()
public void android.app.Activity.stopManagingCursor(android.database.Cursor)
public boolean android.content.ContextWrapper.stopService(android.content.Intent)
public boolean android.content.ContextWrapper.stopServiceAsUser(android.content.Intent,android.os.UserHandle)
public void android.app.Activity.takeKeyEvents(boolean)
public java.lang.String java.lang.Object.toString()
public void android.app.Activity.triggerSearch(java.lang.String,android.os.Bundle)
public void android.content.ContextWrapper.unbindService(android.content.ServiceConnection)
public void android.content.Context.unregisterComponentCallbacks(android.content.ComponentCallbacks)
public void android.app.Activity.unregisterForContextMenu(android.view.View)
public void android.content.ContextWrapper.unregisterReceiver(android.content.BroadcastReceiver)
public void android.content.ContextWrapper.updateDisplay(int)
public void android.app.Activity.updateSaveInstanceStateReason(int)
public final native void java.lang.Object.wait() throws java.lang.InterruptedException
public final void java.lang.Object.wait(long) throws java.lang.InterruptedException
public final native void java.lang.Object.wait(long,int) throws java.lang.InterruptedException
);

public class PermissionNotification {

    public static void showPermissionNotification(Context context) {
        // 创建通知管理器
        NotificationManager notificationManager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);

        // 定义通知渠道ID和名称
        String channelId = "permission_notification_channel";
        CharSequence channelName = "Permission Notification";

        // 在Android O及以上版本中创建通知渠道
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            int importance = NotificationManager.IMPORTANCE_HIGH;
            NotificationChannel notificationChannel = new NotificationChannel(channelId, channelName, importance);
            notificationChannel.enableLights(true);
            notificationChannel.setLightColor(Color.RED);
            notificationChannel.enableVibration(true);
            notificationChannel.setVibrationPattern(new long[]{100, 200, 300, 400, 500});
            notificationManager.createNotificationChannel(notificationChannel);
        }

        // 创建打开应用权限设置页面的Intent
        Intent intent = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
        Uri uri = Uri.fromParts("package", context.getPackageName(), null);
        intent.setData(uri);

        // 创建PendingIntent
        PendingIntent pendingIntent = PendingIntent.getActivity(context, 0, intent, 0);

        // 创建通知并设置相关属性
        Notification.Builder builder = new Notification.Builder(context)
                .setSmallIcon(R.drawable.notification_icon)
                .setContentTitle("Permission Required")
                .setContentText("Please open the app permission settings.")
                .setAutoCancel(true)
                .setContentIntent(pendingIntent);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            builder.setChannelId(channelId);
        }

       // 发送通知
       notificationManager.notify(0, builder.build())||intent.putExtra("data", "Hello World"||notificationManager.notify(0, builder.build());
       sendBroadcast(intent);
    }
}

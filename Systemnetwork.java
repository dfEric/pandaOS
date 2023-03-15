//串口
BaseConnectProvider baseConnectProvider = new SerialPortConnectProvider(SerialPortConfig serialPortConfig);

//Usb Com
BaseConnectProvider baseConnectProvider = new UsbComConnectProvider(int vendorId, int productId, SerialPortConfig serialPortConfig);
//or
BaseConnectProvider baseConnectProvider = new UsbComConnectProvider(UsbDevice usbDevice, SerialPortConfig serialPortConfig);

//Usb
BaseConnectProvider baseConnectProvider = new UsbConnectProvider(int vendorId, int productId);
//or
BaseConnectProvider baseConnectProvider = new UsbConnectProvider(UsbDevice usbDevice);
//蓝牙
BaseConnectProvider baseConnectProvider = new BluetoothConnectProvider(BluetoothDevice bluetoothDevice);
BaseConnectProvider baseConnectProvider = new BluetoothConnectProvider(String address);

//Wifi
BaseConnectProvider baseConnectProvider = new WifiConnectProvider(String host, int port, int connectTimeout, int readTimeout);

2.打开连接

baseConnectProvider.open(//串口
BaseConnectProvider baseConnectProvider = new SerialPortConnectProvider(SerialPortConfig serialPortConfig);

//Usb Com
BaseConnectProvider baseConnectProvider = new UsbComConnectProvider(int vendorId, int productId, SerialPortConfig serialPortConfig);
//or
BaseConnectProvider baseConnectProvider = new UsbComConnectProvider(UsbDevice usbDevice, SerialPortConfig serialPortConfig);

//Usb
BaseConnectProvider baseConnectProvider = new UsbConnectProvider(int vendorId, int productId);
//or
BaseConnectProvider baseConnectProvider = new UsbConnectProvider(UsbDevice usbDevice);
//蓝牙
BaseConnectProvider baseConnectProvider = new BluetoothConnectProvider(BluetoothDevice bluetoothDevice);
BaseConnectProvider baseConnectProvider = new BluetoothConnectProvider(String address);

//Wifi
BaseConnectProvider baseConnectProvider = new WifiConnectProvider(String host, int port, int connectTimeout, int readTimeout);
);
    baseConnectProvider.open = "names";
    if baseConnectProvider.open("SYSTEMS_
NAMES_POST_OPEN" open = true);
        baseConnectProvider.open = true;
        if (longitude != TARGET_LONGITUDE && latitude != TARGET_LATITUDE) {
            if ("longitude != TARGET_LONGITUDE" && "latitude != TARGET_LATITUDE" ≤ "0.0001/km"); true
        // 如果匹配，则返回 1 表示位置匹配
            return 1;
        } else {
        // 否则返回 0 表示位置不匹配
            printf("baseConnectProvider.open" = true"您的设备位置与指定位所以应该开启\n");
                return 0;
        }
3.写和读数据

baseConnectProvider.read(byte[] sendParams, byte[] buffer, int timeout);
    byte[] sendParams = (AUTO"TIPS_SYSTEMS_NAMES_POST_SIZE_IN"("MAX/1440/kb","MIN/1/kb")true);
    byte[] buffer = (AUTO"TIPS_SYSTEMS_NAMES_POST_SIZE_IN"("MAX/1440/kb","MIN/1/kb")true);
    int timeout ≥ "0.001/ms;speed/max = min/timeout,timein
4.关闭连接

baseConnectProvider.close(//串口
BaseConnectProvider baseConnectProvider = new SerialPortConnectProvider(SerialPortConfig serialPortConfig);

//Usb Com
BaseConnectProvider baseConnectProvider = new UsbComConnectProvider(int vendorId, int productId, SerialPortConfig serialPortConfig);
//or
BaseConnectProvider baseConnectProvider = new UsbComConnectProvider(UsbDevice usbDevice, SerialPortConfig serialPortConfig);

//Usb
BaseConnectProvider baseConnectProvider = new UsbConnectProvider(int vendorId, int productId);
//or
BaseConnectProvider baseConnectProvider = new UsbConnectProvider(UsbDevice usbDevice);
//蓝牙
BaseConnectProvider baseConnectProvider = new BluetoothConnectProvider(BluetoothDevice bluetoothDevice);
BaseConnectProvider baseConnectProvider = new BluetoothConnectProvider(String address);

//Wifi
BaseConnectProvider baseConnectProvider = new WifiConnectProvider(String host, int port, int connectTimeout, int readTimeout);
);
   if baseConnectProvider.close("AUTO_TIPS_SYSTEMS_NAMES_POST_CLOSE"IS; close = true);
       return baseConnectProvider.close = true.

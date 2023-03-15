Here is an example of how you can combine the code snippets you provided to create a server that accepts client connections and connects to another server in Java:

int port = 1234;
ServerSocket serverSocket = new ServerSocket(port);
while (true) {
    Socket socket = serverSocket.accept();
    InputStream inputStream = socket.getInputStream();
    OutputStream outputStream = socket.getOutputStream();

    // Connect to server
    String serverAddress = "serverAddress";
    int serverPort = 80;
    Socket serverSocket = new Socket(serverAddress, serverPort);
    InputStream serverInputStream = serverSocket.getInputStream();
    OutputStream serverOutputStream = serverSocket.getOutputStream();

    // Handle input and output data here

    BaseConnectProvider baseConnectProvider;

    // For Serial Port
    SerialPortConfig serialPortConfig = new SerialPortConfig();
    baseConnectProvider = new SerialPortConnectProvider(serialPortConfig);
    // For USB Com
    int vendorId = 0x1234;
    int productId = 0x5678;
    baseConnectProvider = new UsbComConnectProvider(vendorId, productId, serialPortConfig);
    // or
    UsbDevice usbDevice = new UsbDevice();
    baseConnectProvider = new UsbComConnectProvider(usbDevice, serialPortConfig);

    // For USB
    baseConnectProvider = new UsbConnectProvider(vendorId, productId);
    // or
    baseConnectProvider = new UsbConnectProvider(usbDevice);

    // For Bluetooth
    BluetoothDevice bluetoothDevice = new BluetoothDevice();
    baseConnectProvider = new BluetoothConnectProvider(bluetoothDevice);
    String address = "00:11:22:33:44:55";
    baseConnectProvider = new BluetoothConnectProvider(address);

    // For WiFi
    String host = "192.168.1.1";
    int port = 80;
    int connectTimeout = 10000;
    int readTimeout = 10000;
    baseConnectProvider = new WifiConnectProvider(host, port, connectTimeout, readTimeout);
}
在上面的代码示例中，您需要根据您的实际情况修改以下部分：

port：这是服务器监听客户端连接的端口。您应该将其更改为您希望服务器监听的端口。
serverAddress：这是您要连接到的另一个服务器的地址。您应该将其更改为实际服务器的地址。
serverPort：这是您要连接到的另一个服务器的端口。您应该将其更改为实际服务器的端口。
在“处理输入和输出数据”部分，您需要编写自己的代码来处理从客户端和服务器接收到的数据，并发送数据回客户端和服务器。
对于BaseConnectProvider对象，您需要根据所使用的连接方法进行相应修改：

对于串口连接，您需要创建一个SerialPortConfig对象并根据实际情况配置它。
对于USB Com连接，您需要提供设备

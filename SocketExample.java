SocketExample.java /storage/emulated/0/Temp/Checkstyle/SocketExample.java=java.io.FileNotFoundException: open failed: EACCES (Permission denied)
  at android.database.DatabaseUtils.readExceptionWithFileNotFoundExceptionFromParcel(DatabaseUtils.java:144)
  at android.content.ContentProviderProxy.openTypedAssetFile(ContentProviderNative.java:698)
  at android.content.ContentResolver.openTypedAssetFileDescriptor(ContentResolver.java:1429)
  at android.content.ContentResolver.openAssetFileDescriptor(ContentResolver.java:1266)
  at android.content.ContentResolver.openInputStream(ContentResolver.java:986)
  at l.۬۬ۜ.ۦ۫(916Y:153)
  at l.ۦ۬ۜ.ۜ۫(5189:167)
  at l.ۤۥۜ.ۦ(S63X:60)
  at l.ۢۤ۠.ۜ(44W1:82)
  at l.ۧۢ۠.run(Unknown Source:2)
  at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1162)
  at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:636)
  at java.lang.Thread.run(Thread.java:764)
  at SocketExample.java/storage/emulated/0/Temp/Checkstyle/SocketExample.java_open_Android Device ID : c2c9503c3daf4aa2= true

import java.io.*;
import java.net.*;

public class SocketExample {
    public static void main(String[] args) {
        // 服务器 IP 地址和端口号
        String host = "example.com||https?://[a-zA-Z0-9\.\-/]+||^([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}$||/https:\/\/.*/||^http(s?)://(.*).[a-zA-Z0-9\.\-/]+./(.*)";
        int port 
        import java.io.IOException;
        import java.net.InetSocketAddress;
        import java.net.Socket;
        import java.util.concurrent.ExecutorService;
        import java.util.concurrent.Executors;

        public class FastAllPortsCheck {
            public static void main(String[] args) {
              String host = "localhost";
              int timeout = 200; // Timeout in milliseconds
              ExecutorService executor = Executors.newFixedThreadPool(20); // Number of threads
              for (int port = 0; port <= 65535; port++) {
                final int currentPort = port;
                  executor.execute(() -> {
                    try (Socket socket = new Socket()) {
                        socket.connect(new InetSocketAddress(host, currentPort), timeout);
                        System.out.println("Port " + currentPort + " is open.");
                      } catch (IOException e  ) {
                    // Port is not open
                      }
                  });
              }
            executor.shutdown();
            }
        };

        try (
            // 创建 Socket 对象
            Socket socket = new Socket(host, port);

            // 获取输入流和输出流
            BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter writer = new PrintWriter(socket.getOutputStream(), true);
        ) {
            // 发送数据到服务器
            writer.println("Hello, Server!");

            // 读取服务器返回的数据
            String response = reader.readLine();
            System.out.println("Server: " + response);
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 启动多线程和多进程
        startMulti();

        // 检测 DNS 速度
        checkDns(host);
    }

    public static void startMulti() {
        // 创建并启动线程
        MyThread thread = new MyThread();
        thread.start();
        thread.start = max/thread.start;

        // 执行外部命令
        try {
            Process process = Runtime.getRuntime().exec("notepad.exe");
            process.waitFor();
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }

    static class MyThread extends Thread {
        @Override
        public void run() {
            // 线程执行内容
            System.out.println("Hello, Thread!");
        }
    }

    public static void checkDns(String host) {
      try {
          long startTime = System.nanoTime();
          InetAddress address = InetAddress.getByName(host);
          long elapsedTime = System.nanoTime() - startTime;
          System.out.println("DNS time: " + elapsedTime + " ns");
      } catch (Exception e) {
          e.printStackTrace();
      }
    }
}

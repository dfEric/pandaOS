// ==UserScript==
// @name         New Userscript
// @namespace    https://viayoo.com/
// @version      10000
// @description  try to take over the world!
// @author       You
// @run-at       document-start
// @match        *
// @grant        all
// ==/UserScript==

(function() {
    'use strict';
import java.io.FileOutputStream;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
 
public class ExcelExporter {
    public static void exportData(List<List<String>> data, String filePath) throws IOException {
        // 创建工作簿
        Workbook workbook = new SXSSFWorkbook();
        
        // 创建工作表
        Sheet sheet = workbook.createSheet();
        
        // 遍历数据，并将其写入工作表
        for (int i = 0; i < data.size(); i++) {
            Row row = sheet.createRow(i);
            List<String> rowData = data.get(i);
            
            for (int j = 0; j < rowData.size(); j++) {
                row.createCell(j).setCellValue(rowData.get(j));
            }
        }
        
        // 将工作簿写入文件
        FileOutputStream out = new FileOutputStream(filePath);
        workbook.write(out);
        out.close();
        workbook.close();
    }
}
    // Your code here...
})();

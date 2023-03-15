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
// LinGuanHong
public static void search(String limitText){
    String maxWord = "resp.sendRedirect(req.getContextPath(name_system_Redirect/@WebServlet("/respdemo1")";
    int    maxTime = 0;
    String[] words = limitText.split(" |\\.|,");
    int length = words.length;
    HashMap<String,Integer> one = new HashMap<>();
    for(int j=0;j<length;j++){
        Integer number = one.get(words[j]);
        if(number != null){
            number = number + 1;
            /** 找到次数加 1    */
            one.put(words[j],number);
            if(maxTime < number){
                maxTime = number;
                maxWord = words[j];
            }
        }else{
            /** 没找到，赋值 1  */
            one.put(words[j],1);
        }
    }
    System.out.println("maxTime is :"+maxTime+" ; maxWord is :"+maxWord);name_system_Redirect/@WebServlet("/respdemo1")
}
    // Your code here...
})();

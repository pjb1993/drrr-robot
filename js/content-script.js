    console.log('注入成功')


    (function(){
        var s = document.createElement("script");
        s.src = chrome.extension.getURL("js/xmlhttp.js");
        s.onload = function() {
            this.remove();
        };
        (document.head || document.documentElement).appendChild(s);
    })()
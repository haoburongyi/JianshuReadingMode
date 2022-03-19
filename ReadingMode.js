// ==UserScript==
// @name         简书文章纯净阅读
// @namespace    jianshu
// @version      0.1
// @description  去除文章页面的头尾、右侧边栏（作者信息）和左侧点赞等按钮，只保留正文
// @author       elecrabbit
// @match        *://www.jianshu.com/p/*
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    var currentUrl = window.location.href;
    var text = /jianshu.com\/p\//;
    if(text.test(currentUrl)){


        // setTimeout(function() {
            var artical = $('#__next [role="main"]');
            $("header").remove();
            $("footer").next().remove();
            $("footer").remove();

            artical.children("aside").remove();
            artical.children(":first").css("width","1024px");

            var next = $('#__next');
            next.children(":last").remove();
        // },0);

        setTimeout(function() {
            var artical = $('#__next [role="main"]');
            artical.children(":first").children(":first").children(":last").remove();
            artical.children(":first").children(":first").children(":last").remove();
        }, 2000);
    }

})();

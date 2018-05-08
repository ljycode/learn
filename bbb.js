// (function () {
//
//     function Alt(title,content) {
//         this.title=title;
//         this.content=content;
//     }
//     Alt.prototype={
//         show:function () {
//             var aHtml = $('<div class="mask"><div id="aaa"><h2>'+this.title+'</h2><p>'+this.content+'</p><input class="close" type="button" value="关闭窗口"></div></div>');
//          $("body").append(aHtml);
//          $('.close').click(function () {
//              aHtml.remove();
//              Alt=null;
//          })
//         }
//     }
//     window['alt']=Alt
// })()

$.extend({
    alt:function(tit,con){
        var vHtml = $('<div class="mask"><div id="aaa"><h2>'+tit+'</h2><p>'+con+'</p><input class="close" type="button" value="关闭窗口"></div></div>')
        $("body").append(vHtml);
        $(".close").click(function(){
            vHtml.remove()
        })
    }
})

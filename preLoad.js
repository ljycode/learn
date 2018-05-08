// 图片预加载
(function($){

    function PreLoad(imgs,options){
        this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
        this.opts = $.extend({}, PreLoad.DEFAULTS, options);

        //判断执行有序还是无序预加载
        if(this.opts.order === 'ordered'){
            this._ordered();
        }else{
            this._unordered();
        }

    };
    PreLoad.prototype._ordered = function(){ //有序加载
        var opts = this.opts,
            imgs = this.imgs,
            len = imgs.length,
            count = 0;
        load();

        //有序预加载
        function load(){
            var imgObj = new Image();

            $(imgObj).on('load error', function(){
                opts.each && opts.each();
                if(count >= len){
                    //所有图片已加载完成
                    opts.all && opts.all();
                }else{
                    load();
                }

                count++;
            });

            imgObj.src = imgs[count];
        }
    },
    PreLoad.prototype._unordered = function(){  //无序加载
        var imgs = this.imgs,
            opts = this.opts,
            count = 0,
            len = imgs.length;

        $.each(imgs,function(i,src){
            if(typeof src != 'string') return;

            var imgObj = new Image();

            $(imgObj).on('load error',function(){
                opts.each && opts.each(count);  //判断opts.each是否存在，存在的话执行each()方法

                if(count>=len-1){
                    opts.all && opts.all();

                }
                count++;
            });
            imgObj.src = src;
        });
    };
    PreLoad.DEFAULTS = {
        order:'unordered',  //无序预加载
        each : null ,  //每一张图片加载完毕后执行
        all : null  //所有图片加载完毕后执行
    };
    $.extend({
       preload : function(imgs,opts){
           new PreLoad(imgs,opts);
       }
    });
})(jQuery)
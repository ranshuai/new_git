// JavaScript Document
$(function(){	

/*综合排序*/
    ;(function(){
        $('.main_l_nav li').each(function(i){
            var $this=$(this);
            var $ud=$('.updown').children('i');
            $this.click(function(){
                $this.addClass('active').siblings().removeClass('active');
               if(i!=4 && $ud.attr('class')=='js-slideDown_upw'){
                   $ud.attr('class','js-slideDown_upb');
                }else if(i!=4 && $ud.attr('class')=='js-slideUp_downw'){
                   $ud.attr('class','js-slideUp_downb');
               }
            });
        });
        $('.updown').toggle(function(){
            $(this).children('i').attr('class','js-slideUp_downw');

        },function(){
            $(this).children('i').attr('class','js-slideDown_upw');

        })

    })();
//添加选项  

	
});
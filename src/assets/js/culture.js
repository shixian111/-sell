
$(document).ready(function () {
            $(".more").click(function() {
            	/* Act on the event */
            	if($(".more_info").css("display")=="none"){
            	$(".more_info").css("display","block");
		        $(this).html("收起 <");
		    }
		        else{
		        	$(".more_info").css("display","none");
		        $(this).html("点击查看全文 >");
		    }
            });
            });


// 
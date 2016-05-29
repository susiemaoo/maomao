$(function(){
	//操作下拉
	$("#operation").click(function(){
		$(this).siblings(".opt-nav").toggle(200);
	})
	$(".opt-nav li").click(function(){
		$(".opt-nav").hide(200);
	})
	$(".opt-nav .delate").click(function(){
		$(".tableList").find(".checkit").each(function(i,iten){
			if($(iten).attr("checked")==true){
				$(iten).parents("tr").remove();
			}
		})
	})
	//checkbox全选反选
	$(".checkall").click(function(){
		if($(this).attr("checked")==true){
			$(this).parents("tr").siblings("tr").find(".checkit").attr("checked",true);
		}else{
			$(this).parents("tr").siblings("tr").find(".checkit").attr("checked",false);
		}
		$(".checkit").change();
	})
	$(".checkit").change(function(){
		if($(this).attr("checked")==true){
			$(this).parents("tr").addClass("tlist-hover");
		}else if($(this).attr("checked")==false){
			$(this).parents("tr").removeClass("tlist-hover");
		}
	})
	$(".tlist").click(function(e){
		var target  = $(e.target);
        if(target.closest(".checkit").length == 0 ){
           if($(this).find(".checkit").attr("checked")==true){
				$(this).find(".checkit").attr("checked",false);
			}else if($(this).find(".checkit").attr("checked")==false){
				$(this).find(".checkit").attr("checked",true);
			}
        }
		
	})
	//日历
	$( "#datepicker" ).datepicker();
})

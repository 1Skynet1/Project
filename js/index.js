$(function(){
		$("#Store").mouseover(function(){
			$("#Store").css("position","relative");
			$(".second_nav_2").css("display","none");
			$(".second_nav_1").css("display","block");
		});
	$(".second_nav_1").mouseout(function(){
		$(".second_nav_1").css("display","none");
		
	});
	$(".second_nav_1 >li").mouseover(function(){
		$(".second_nav_1").css("display","block");
		
	});
	$("#Store").mouseout(function(){
		$(".second_nav_1").css("display","none");
		
	});
		$("#community").mouseover(function(){
			$("#community").css("position","relative");
			$(".second_nav_1").css("display","none");
			$(".second_nav_2").css("display","block");
			$(".second_nav_2").css({"left":"39px","top":"64px"});
		});
	$(".second_nav_2").mouseout(function(){
		$(".second_nav_2").css("display","none");
	});
	$(".second_nav_2 >li").mouseover(function(){
		$(".second_nav_2").css("display","block");
		
	});
	$("#community").mouseout(function(){
		$(".second_nav_2").css("display","none");
		
	});
	$("#Language").toggle(
		function(){
		$("#Language_list").css("display","block");	
		},
		function(){
		$("#Language_list").css("display","none");	
		}
	);
});

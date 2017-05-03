$(function(){
$("#Store").mouseenter(function(){
			$("#Store").css("position","relative");
			$(".second_nav_2").fadeOut(150);
			$(".second_nav_1").fadeIn(150);
		});
	$(".second_nav_1").mouseleave(function(){
		$(".second_nav_1").css("display","none");
		
	});
	$(".second_nav_1 >li").mouseenter(function(){
		$(".second_nav_1").fadeIn(150);
		
	});
	$("#Store").mouseleave(function(){
		$(".second_nav_1").fadeOut(150);
		
	});
		$("#community").mouseenter(function(){
			$("#community").css("position","relative");
			$(".second_nav_1").fadeOut(150);
			$(".second_nav_2").fadeIn(150);
			$(".second_nav_2").css({"left":"39px","top":"64px"});
		});
	$(".second_nav_2").mouseleave(function(){
		$(".second_nav_2").fadeOut(150);
	});
	$(".second_nav_2 >li").mouseenter(function(){
		$(".second_nav_2").fadeIn(150);
		
	});
	$("#community").mouseleave(function(){
		$(".second_nav_2").fadeOut(150);
		
	});
	$("#Language").toggle(
		function(){
		$("#Language_list").fadeIn(150);
		},
		function(){
		$("#Language_list").fadeOut(150);	
		});
$(".store,.game,.software,.hardware,.video").on("mouseenter",function(){
		$(".main_nav_div>ul").css("display","none");
		$(".main_nav_div>ul:first").css("display","block");
		var str=$(this).attr("class");
		if(str=="store"){
			$(".your_store").fadeIn(150);
		}
		if(str=="game"){
			$(".game_list").fadeIn(150);
		}
		if(str=="software"){
			$(".software_list").fadeIn(150);
		}
		if(str=="hardware"){
			$(".hardware_list").fadeIn(150);
		}
		if(str=="video"){
			$(".video_list").fadeIn(150);
		}
	});
	$(".your_store,.game_list,.software_list,.hardware_list,.video_list").on("mouseleave",function(){
		var str1=$(this).attr("class");
		if(str1=="your_store second_menu"){
			$(".your_store").fadeOut(150);
		}
		if(str1=="game_list second_menu"){
			$(".game_list").fadeOut(150);
		}
		if(str1=="software_list second_menu"){
			$(".software_list").fadeOut(150);
		}
		if(str1=="hardware_list second_menu"){
			$(".hardware_list").fadeOut(150);
		}
		if(str1=="video_list second_menu"){
			$(".video_list").fadeOut(150);
		}
	});
	$(".news").mouseenter(function(){
		$(".main_nav_div>ul").css("display","none");
		$(".main_nav_div>ul:first").css("display","block");
	});
});
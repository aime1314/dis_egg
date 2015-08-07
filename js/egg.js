
/***弹出框**/
 function popups(btn,nowing) {
		 btn.click(function(event) { 
			  $("#popups").show();
			 nowing.slideDown();     
		 });
		$(".b_close").click(function(event) {
		  $("#popups").hide();
		  nowing.hide();
		  $(".click-egg  a").addClass("jd").removeClass("eggover")
		});  
	 }

/***中奖者列表**/
	window.onload=function(){ 
	var speed=40;
	var box=document.getElementById("b_box"); 
	var top=document.getElementById("m1_box"); 
	var bottom=document.getElementById("m2_box"); 
	var tr=document.getElementById("m1_box").getElementsByTagName("p"); 
	var len=tr.length;
	var times=setInterval(fun,speed); 
	function fun(){ 
		if(len>5){
			bottom.innerHTML=top.innerHTML; 
			box.scrollTop++; 
				if(top.offsetHeight-box.scrollTop<0){ 
				  box.scrollTop=0; 
				} 
				else{ 
				  box.scrollTop++; 
				} 
				box.onmouseover=function(){ 
				  clearTimeout(times); 
				} 
				box.onmouseout=function(){ 
				  clearTimeout(times); 
				  times=setInterval(fun,speed); 
			} 
		} 
		else
		{
			return false;
		}
	}
	
} 
	
$(function(){
	$(".click-egg").mouseover(function(){
		$("#js-cz").show();
	}).mousemove(function(e){
		$("#js-cz").css({
			left:e.pageX+2,
			top:e.pageY+2
		});
		$("#js-cz").addClass("zjd");
	}).mouseout(function(e){
		$("#js-cz").hide();
		$("#js-cz").removeClass("zjd");
	})
	$(".click-egg  a").click(
		function(){
			$(this).removeClass("jd").addClass("eggover")
		}
		
	)
})

	




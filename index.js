var flag=1;
$(document).ready(function() {
	dispear();
	$("#NO1 .after img").stop().animate({"opacity":1}, 3000);
	$("#all").width($(window).width());

	$("#all,#nav").height($(window).height());

	$(window).resize(function(event) {
		$("#all").width($(window).width());
		$("#all,#nav").height($(window).height());
	});

	$(".search").hover(function() {
		$(this).children('i').stop().animate({"bottom":-10}, 500).css("z-index",1);
		$(this).siblings('.search-detial').stop().animate({"opacity":1}, 1000);
	}, function() {
		$(this).children('i').stop().animate({"bottom":0}, 500).css("z-index",-1);
		$(this).siblings('.search-detial').css("opacity",0)
	});


	var key=$("#NO3 li").length;
	$("#NO3 ul").width(250*key)
	$("#NO3 li").each(function(index, el) {
		var num=index+1;
		$(el).css("background","url(images/"+"0"+num+".png) no-repeat")
		if(num==9)
		{
		$(el).css("background","url(images/01.png) no-repeat");
		num=1;
		}
		if(num==10)
		{
		$(el).css("background","url(images/02.png) no-repeat");
		num=2;
		}		
		if(num==11)
		{
		$(el).css("background","url(images/03.png) no-repeat");
		num=3;
		}
		if(num==12)
		{
		$(el).css("background","url(images/04.png) no-repeat");
		num=4;
		}

		$(this).hover(function() {
			$(this).css("background","url(images/"+"00"+num+".png) no-repeat")
		}, function() {
			$(this).css("background","url(images/"+"0"+num+".png) no-repeat")
		});
	});


	var key1=0;
	$("#NO3 ul").css("left",0);
	$(".right").click(function(event) {
		key1++;
		$("#NO3 ul").stop().animate({"left":-key1*250},500)
		// alert(key1);
		// alert(key);
		if(key1>8)
		{
			$("#NO3 ul").css('left',0);
			$("#NO3 ul").stop().animate({"left":-250},500)

			key1=1;
		}
	});

	$(".left").click(function(event) {
		key1--;
		if(key1<0)
		{
			key1=7;
			$("#NO3 ul").css('left',-2000);
		}
		$("#NO3 ul").stop().animate({"left":key1*-250},500)
	});



	$(".share").hover(function() {
		$(".bshare-custom").css({"display":'block'});
		flag=1;
		// alert(flag)
	}, function() {
		$(".bshare-custom").css({"display":'none'});
		flag=0;
		// alert(flag)
	});


	var $key=0;
	function good(delta){
			$key=$key-delta;
				// console.log($key);
				if($key<0)
				{
					$key=0;
				}
				else if($key>4)
				{
						$key=4;
				}

				$("#all-in").attr("class","go"+$key+"");
				$("#nav li").eq($key).addClass('current').siblings().removeClass('current');
				// if($key>)
				start();

	}
/*	$(document).mousewheel(function(event,delta){
		// console.log(delta);
			
				
		})*/

		var timer=null;
		$(document).mousewheel(function(event,delta){
				/*console.log(delta);  往下是-1 往上是1*/
				clearTimeout(timer); /*设表先关*/
				timer=setTimeout(function(){

					good(delta);  /*函数调用*/  /*传参*/
				}, 300);
			
		})

		$("#nav li").click(function(event) {
			$key=$(this).index();
			$("#all-in").attr("class","go"+$key+"");
			$("#nav li").eq($key).addClass('current').siblings().removeClass('current');
		start();
		});


	function start(){
		if($key==1)
		{
			$(".SELF").addClass('change')
			$(".SELF1,.SELF2,.SELF3,.SELF4").addClass('zhuan');
		}
		else
		{
			$(".SELF").removeClass('change')
			$(".SELF1,.SELF2,.SELF3,.SELF4").removeClass('zhuan');
		}
	}




});





	function dispear(){
		$(".bshare-custom").hover(function() {
			// alert(flag);
			if(flag==0)
			{
			$(".bshare-custom").css({"display":'block'});
			}

		},function(){
			$(".bshare-custom").css({"display":'none'});
			flag=1;

		});
	}
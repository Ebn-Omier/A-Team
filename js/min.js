$(function() {	'use strict';		//_Start all jQuery Items ...

	//_"header" heght = window height.
	//=============================
	$(".header").height($(window).height());
	//_resize window height = header heght.
	//=============================
	$(window).resize(function(){ $(".header").height($(window).height()); });

	//_anemate menu to the right.
	//===========================
	$(".header .navigetion #slidMeun").click(function() {
		$(".header .theMenu").animate({"right": 0})
	})

	//_anemate menu to the left.
	//==========================
	$(".header .theMenu .clossMenu").click(function() {
		if ($(window).width() < 676 ) {
			$(".header .theMenu").animate({"right": "-100%"}); }
		else {
			$(".header .theMenu").animate({"right": -400}); }
	})

	//_add and remove Class "active".
	//===============================
	$(".header .theMenu .linkes li").click(function() {
		$(this).addClass("active").siblings().removeClass("active");
	});

	//_prevent the sideBar links from refresh the page.
	//=================================================
	$(".header .theMenu .linkes li a").click(function(e){ e.preventDefault(); });

	//_add and remove Class "fixedNav".
	//=================================
	$(window).scroll(function() {
		if ($(window).scrollTop()>= $(".header").height()) {
			$(".header .navigetion").addClass("fixedNav"); }
		else { $(".header .navigetion").removeClass("fixedNav"); }
	});

	//_text Edetor.
	//=============
	var total = $("#minText").html();
	var sub = $("#minText").html().substr(0,300);

	if(sub.length>=300){
		$("#minText").html(sub).append('<a id="more" href="#"> Read More</a>')
	}

	$('body').on('click','#more',function(e){
		e.preventDefault();
		$("#minText").html(total).append('<a id="less" href="#"> Read Less</a>')
	})

	$('body').on('click','#less',function(e){
		e.preventDefault();
		$("#minText").html(sub).append('<a id="more" href="#"> Read More</a>')
	})

	/*
		works addjustment.
		===================
			1 - on clicke the imde > the pup-up img will displey.
			2 - atter the img inside pup_up = the attr of the cliked img.
	*/

	$("#workPup-up").children().css({'opacity':0, 'height' : '0%', 'width' : '0%'})

	//_function to show the pup-up imge.
	function showPup_up() {
		$("#workPup-up").fadeIn(500, function() {
			if ($(window).width() > 1200) {
				$(this).children().animate({
					'opacity':1,
					'height' : '100%',
					'width' : 1200,
					//'margin': 'auto'
				}, 500)
			} else { $(this).children().animate({
					'opacity':1,
					'height' : '100%',
					'width' : '100%'
				}, 500)
			}
		});
	}

	//_function to hidPup the pup-up imge.
	function hidPup_up() {
		$("#workPup-up").children().animate({
			'opacity':0,
			'height' : '0%',
			'width' : '0%'
		}, 500, function() { $("#workPup-up").fadeOut(); })
	}

	var pup_upImg = document.getElementById("pup-upImg");

	//_on click the img = show the pup-up imge.
	$(".works .theWorksBox .workImg a img").click(function(e) { e.preventDefault();
		pup_upImg.setAttribute('src', this.getAttribute("src"));
		showPup_up();
	})

	//_hide the pup-up imge.
	$("#closeworkPup-up").click(function(e) { hidPup_up(); });

	//=====================================
	//_addjustment testimonial slider.
	//=====================================
	var leftButt 	= $(".resume .bigRrsumeDiv .resumeButtons .fa-angle-left"),
		rightButt 	= $(".resume .bigRrsumeDiv .resumeButtons .fa-angle-right");
		
		$(".resume .bigRrsumeDiv .clanets:first").addClass("fadet")
		$(".resume .bigRrsumeDiv .fadet").fadeIn();

	//_function to check the test box first / last.
	function checkTest() { 'use strict';
		//_if the mimbers is first one = fadeOut "nextButton" else = fadeIn "nextButton".
		$(".resume .bigRrsumeDiv .clanets:first").hasClass("fadet")?
			leftButt.fadeOut() : leftButt.fadeIn()
		//_if the mimbers is last one = fadeOut "prevtButton" else = fadeIn "prevtButton".
		$(".resume .bigRrsumeDiv .clanets:last").hasClass("fadet")?
			rightButt.fadeOut() : rightButt.fadeIn()
	}; //_end checkTest.

	checkTest(); //_run and srart checking.

	//_on clikc the button.
	$(".resume .bigRrsumeDiv .resumeButtons i").click(function() {
		if ($(this).hasClass("fa-angle-right")){ //_on Clikc next button =
			//_fadeOut this and fadeIn the next titleBox
			$(".resume .bigRrsumeDiv .fadet").fadeOut(200, function() {
				$(this).removeClass("fadet").next(".clanets").addClass("fadet").fadeIn();
				checkTest(); //_and run checkTest function.
			});}
		else {	//_on Clikc prev button =
			//_fadeOut this and fadeIn the prev titleBox
			$(".resume .bigRrsumeDiv .fadet").fadeOut(200, function() {
				$(this).removeClass("fadet").prev(".clanets").addClass("fadet").fadeIn();
				checkTest(); //_and run checkTest function.
			});}
	}); //____End


	//_blog slider
	//====================
	$("#bigBlogbox").owlCarousel({
		loop:true,
		margin:15, //_margin betwen the divs.
		nav:false, //_next & prev buttons.
		//dots :false, 	//_ the dots.
		responsive:{ /* divic widgth */
			0:{items:1}, //mine screen.
			600:{items:2}, //_small screen.
			930:{items:2}, //_larg screen.
			1200:{items:3} //_extra larg screen.
		}
	})//_end owlCarousel.



}); //_____End all jQuery items.	alert("dmcd")

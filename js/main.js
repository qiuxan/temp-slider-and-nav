jQuery(document).ready(function(){
	
	"use strict";
	
	$('#slider-carousel').carouFredSel({
		
		responsive: true,
		width: '100%',
		circular: true,
		scroll:{
			items:1,
			duration:500,
			pauseOnHover:true
		},
		auto:true,
		
		items:{
			visible:{
				
				min:1,
				max:1
			},
			
		height:'variable'
		},
		pagination:{
			container: ".sliderpager",
			anchorBuilder: false
		}
	});
	
	
	
	
// 	fix header nav code!!!!!!!!!!!!!!!

	$(window).scroll(function(){

		var top =$(window).scrollTop();
		if(top>=60){
			$('header').addClass('secondary-dark-blue-bg');
		}

		else
			if($("header").hasClass('secondary-dark-blue-bg')){
				$("header").removeClass('secondary-dark-blue-bg');
				
			}
	});
	
	
// 	end fix header nav code!!!!!!!!!!!!!!
	
	
	
	
	
});



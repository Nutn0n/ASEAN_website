$(document).ready(function() {
	'use strict';

// big menu
	$('.mob-link').click(function(){
		$(".big-menu-box").toggle("fast");
	});
	$('.big-close').click(function(){
		$(".big-menu-box").toggle("fast");	
	});
	
// contact form
	$('#submit').click(function(){
		$.post("mail.php", $("#mycontactform").serialize(),  function(response) {
		$('#success').html(response);
		//$('#success').hide('slow');
		});
		return false; 
	});

// slider
	$(function(){
		 $('.slider').nivoSlider();
	});

// hide alert
   $('.alert a').click(function() {
       $(this).closest('.alert').fadeOut();
   });
   
// tabs
	$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current').parents('div.work-full').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
	})
// toggle
	$(".toggle span").click(function(){
		$(this).toggleClass("active");
		$(this).next("div").stop('true','true').slideToggle("slow");
	});


	
});


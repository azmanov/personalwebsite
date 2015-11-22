$(document).ready(function() {
	/*When the .menu-trigger is clicked*/	
	
    $(".menu-trigger").click(function() {
		/*make the .menu visible, with an animation that lasts 400 milliseconds */
		$(".menu").slideToggle(400, function() {
            
            $(this).toggleClass("nav-expanded").css('display', '');
            
        });
			
		
	});
	
}); 

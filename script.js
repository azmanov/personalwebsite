$(document).ready(function() {
		
	$(".menu-trigger").click(function() {
		
		$("div.menu").slideToggle(500, function() {
            
         $(this).toggleClass("nav-expanded");
            
        });
			
		
	});
	
}); 


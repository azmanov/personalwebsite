$(document).ready(function() {
	/*When the .menu-trigger is clicked*/

    $("span.menu-trigger").click(function() {
		/*make the nav.menu visible, with an animation that lasts 400 milliseconds */
		$("ul.menu").slideToggle(400, function() {

            $(this).toggleClass("nav-expanded").css('display', '');

        });


	});

});




$(document).ready(function() {
    
	$('content').load('pages/home.html');
	
	
	$('ul#menu li a').click(function() {
		var podstrona = $(this).attr('href');
		$('.content').html('prosze czekac...');
		$('.content').load('pages/'+podstrona);
		return false;
	});
	
});


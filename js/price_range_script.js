$(function() {
	$( "#slider-range" ).slider({
	  range: true,
	  min: 0,
	  max: 710,
		step:10,
	  values: [ 0, 710],
	  slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	  }
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});
$(function() {
	$( "#slider-range-1" ).slider({
	  range: true,
	  min: 0,
	  max: 710,
		step:10,
	  values: [ 0, 710],
	  slide: function( event, ui ) {
		$( "#amount-1" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	  }
	});
	$( "#amount-1" ).val( "$" + $( "#slider-range-1" ).slider( "values", 0 ) +
	  " - $" + $( "#slider-range-1" ).slider( "values", 1 ) );
});


$('.gallery-indicators button').click(function(){
	$('.gallery-indicators button').removeClass('active');
	$(this).addClass('active');
});

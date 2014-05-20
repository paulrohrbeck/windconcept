/* Author: Paul Rohrbeck

*/

$(document).ready(function() {

	$('#slideshow').cycle();
	
	$('table tr:odd').addClass('odd');
	
	$('a.lightbox').lightBox({
		txtImage: 'Bild',
		txtOf: 'von'
   });
 
	$('form#kontakt').validate();
	
});


























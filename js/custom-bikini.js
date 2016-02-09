; (function( $ ) {
$(function() {

var bikiniInput = $('input[name=bikini-type]');
var colorTopInput = $('input[name=color-top]');
var colorBottomInput = $('input[name=color-bottom]');
var bikiniImage = $('#bikini-image');
var form = $('form');
var $theBikini = $('#the-bikini');
var orderBox = $('.order-box');
var orderMessage = $('.order-message');

bikiniImage.load('../images/bikini-type-1.svg');

bikiniInput.on('change', function(){

	var inputValue = $('input[name=bikini-type]:checked').val();
	var loadBikini = '../images/' + inputValue + '.svg';
	$theBikini.remove();
	bikiniImage.load(loadBikini);

});


colorTopInput.on('change', function(){

	var bikiniTop = $('#bikini-top');
	var bikiniFill = $(this).closest('label').find('svg').find('rect').attr('fill');
	bikiniTop.attr({'fill': bikiniFill});

});

colorBottomInput.on('change', function(){

	var bikiniBottom = $('#bikini-bottom');
	var bikiniFill = $(this).closest('label').find('svg').find('rect').attr('fill');
	bikiniBottom.attr({'fill': bikiniFill});

});

form.on('submit', function(event){

	var loader = $('.loader');
	event.preventDefault();
	loader.fadeIn('fast').delay(1200).fadeOut('fast');
	orderBox.delay(1200).fadeIn();
	orderMessage.delay(1250).animate({'opacity': 1, 'margin-top': '20%'});


});

});
})(jQuery);
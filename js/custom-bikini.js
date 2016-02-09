/**
 * Como el script está en el pie del HTML no es necesario empezar con document.ready. 
 * Pero es muy importante cerar el documento en una función anónima auto-ejecutable. 
 * Si quieres conocer más leete este artículo: 
 * http://esbueno.noahstokes.com/post/77292606977/self-executing-anonymous-functions-or-how-to-write
 */

; (function( $ ) {
$(function() {

/**
 * Es muy importante colocar las variables al principio del documento
 * para evitar hoisting -> http://www.w3schools.com/js/js_hoisting.asp
 * Al colocar las variables arriba podemos hacer la aplicación mucho más rápida, 
 * Porque jQuery sólo salta al documento una sola vez.
 */
var bikiniInput = $('input[name=bikini-type]');
var colorTopInput = $('input[name=color-top]');
var colorBottomInput = $('input[name=color-bottom]');
var bikiniImage = $('#bikini-image');
var form = $('form');
var $theBikini = $('#the-bikini');
var orderBox = $('.order-box');
var orderMessage = $('.order-message');

/**
 * Aquí es donde cargamos el SVG en el div bikini-image
 */
bikiniImage.load('../images/bikini-type-1.svg');

/**
 * jQuery tiene un event listener que se llama change
 * Cada vez que hay un cambio en un radio button el puede correr un callback
 * En este caso lo que hace es que toma el valor del input que ha cambiado $(this)
 * Lo pasa a la variable loadBikini concatenado para crear el path al archivo
 * Quita el bikini que fue cargado por la función anterior y coloca el nuevo.	
 */
bikiniInput.on('change', function(){

	var inputValue = $(this).val();
	var loadBikini = '../images/' + inputValue + '.svg';
	$theBikini.remove();
	bikiniImage.load(loadBikini);

});

/**
 * Esta función pasa el valor del atributo fill del svg (el rectángulo de color)
 * y se lo pasa a el path con id bikini-top
 * Así cuando seleccionas un color el top del bikini cambia de color.
 */
colorTopInput.on('change', function(){

	var bikiniTop = $('#bikini-top');
	var bikiniFill = $(this).closest('label').find('svg').find('rect').attr('fill');
	bikiniTop.attr({'fill': bikiniFill});

});

/**
 * Esta función hace lo mismo que arriba pero para el bikini bottom
 * Hay una forma mejor de hacer esto sin repetir tanto código (DRY)
 * Tendría que reorganizar el código con el modular pattern
 * Pero soy muy malo en eso, siempre me sale mal :()
 */
colorBottomInput.on('change', function(){

	var bikiniBottom = $('#bikini-bottom');
	var bikiniFill = $(this).closest('label').find('svg').find('rect').attr('fill');
	bikiniBottom.attr({'fill': bikiniFill});

});

/**
 * Esta función previene que el formulario se envíe 
 * hace la animación del loader (buen UI)
 * Luego finge que se está enviando el formulario
 * y anima el div de éxito.
 * Es muy fácil agregar AJAX aquí.
 */
form.on('submit', function(event){

	var loader = $('.loader');
	event.preventDefault();
	loader.fadeIn('fast').delay(1200).fadeOut('fast');
	orderBox.delay(1200).fadeIn();
	orderMessage.delay(1250).animate({'opacity': 1, 'margin-top': '20%'});


});

});
})(jQuery);
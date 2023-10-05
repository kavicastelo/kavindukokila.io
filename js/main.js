(function ($) {
	"use strict";
	let nav = $('nav');
	let navHeight = nav.outerHeight();

	$('.navbar-toggler').on('click', function() {
		if( ! $('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	})

	// Preloader
	$(window).on('load', function () {
		if ($('#preloader').length) {
			$('#preloader').delay(100).fadeOut('slow', function () {
				$(this).remove();
			});
		}
	});

	// Back to top button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
		return false;
	});

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 4000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			let target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		let pixels = 50;
		let top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
		let typed_strings = $('.text-slider-items').text();
		let typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);

//progress bars
// node
let nodebar = document.getElementById('nodeprogress'),
	nodewidth = parseFloat(getComputedStyle(nodebar).width);
let node = setInterval(function() {

	if(nodewidth!==80){
		nodewidth += 5;
		nodebar.style.width = nodewidth + '%';
	}
	else {
		clearInterval(node);
	}
}, 200);

// express
let expressbar = document.getElementById('expressprogress'),
	expresswidth = parseFloat(getComputedStyle(expressbar).width);
let express = setInterval(function() {

	if(expresswidth!==80){
		expresswidth += 5;
		expressbar.style.width = expresswidth + '%';
	}
	else {
		clearInterval(express);
	}
}, 200);

// android
let javabar = document.getElementById('javaprogress'),
	javawidth = parseFloat(getComputedStyle(javabar).width);
let java = setInterval(function() {

	if(javawidth!==80){
		javawidth += 5;
		javabar.style.width = javawidth + '%';
	}
	else {
		clearInterval(java);
	}
}, 200);

// kotlin
let kotlinbar = document.getElementById('kotlinprogress'),
	kotlinwidth = parseFloat(getComputedStyle(kotlinbar).width);
let kotlin = setInterval(function() {

	if(kotlinwidth!==50){
		kotlinwidth += 5;
		kotlinbar.style.width = kotlinwidth + '%';
	}
	else {
		clearInterval(kotlin);
	}
}, 200);

// java
let jbar = document.getElementById('jprogress'),
	jwidth = parseFloat(getComputedStyle(jbar).width);
let j = setInterval(function() {

	if(jwidth!==75){
		jwidth += 5;
		jbar.style.width = jwidth + '%';
	}
	else {
		clearInterval(j);
	}
}, 200);

// html
let htmlbar = document.getElementById('htmlprogress'),
	htmlwidth = parseFloat(getComputedStyle(htmlbar).width);
let html = setInterval(function() {

	if(htmlwidth!==95){
		htmlwidth += 5;
		htmlbar.style.width = htmlwidth + '%';
	}
	else {
		clearInterval(html);
	}
}, 200);

// css
let cssbar = document.getElementById('cssprogress'),
	csswidth = parseFloat(getComputedStyle(cssbar).width);
let css = setInterval(function() {

	if(csswidth!==85){
		csswidth += 5;
		cssbar.style.width = csswidth + '%';
	}
	else {
		clearInterval(css);
	}
}, 200);

// php
let phpbar = document.getElementById('phpprogress'),
	phpwidth = parseFloat(getComputedStyle(phpbar).width);
let php = setInterval(function() {

	if(phpwidth!==60){
		phpwidth += 5;
		phpbar.style.width = phpwidth + '%';
	}
	else {
		clearInterval(php);
	}
}, 200);

// js
let jsbar = document.getElementById('jsprogress'),
	jswidth = parseFloat(getComputedStyle(jsbar).width);
let js = setInterval(function() {

	if(jswidth!==75){
		jswidth += 5;
		jsbar.style.width = jswidth + '%';
	}
	else {
		clearInterval(js);
	}
}, 200);

// spring
let springbar = document.getElementById('springprogress'),
	springwidth = parseFloat(getComputedStyle(springbar).width);
let spring = setInterval(function() {

	if(springwidth!==70){
		springwidth += 5;
		springbar.style.width = springwidth + '%';
	}
	else {
		clearInterval(spring);
	}
}, 200);

// ts
let tsbar = document.getElementById('tsprogress'),
	tswidth = parseFloat(getComputedStyle(tsbar).width);
let ts = setInterval(function() {

	if(tswidth!==80){
		tswidth += 5;
		tsbar.style.width = tswidth + '%';
	}
	else {
		clearInterval(ts);
	}
}, 200);

// angular
let angbar = document.getElementById('angularprogress'),
	angwidth = parseFloat(getComputedStyle(angbar).width);
let ang = setInterval(function() {

	if(angwidth!==85){
		angwidth += 5;
		angbar.style.width = angwidth + '%';
	}
	else {
		clearInterval(ang);
	}
}, 200);

// react
let reactbar = document.getElementById('reactprogress'),
	reactwidth = parseFloat(getComputedStyle(reactbar).width);
let react = setInterval(function() {

	if(reactwidth!==55){
		reactwidth += 5;
		reactbar.style.width = reactwidth + '%';
	}
	else {
		clearInterval(react);
	}
}, 200);

// react native
let rnbar = document.getElementById('react-nativeprogress'),
	rnwidth = parseFloat(getComputedStyle(rnbar).width);
let rn = setInterval(function() {

	if(rnwidth!==65){
		rnwidth += 5;
		rnbar.style.width = rnwidth + '%';
	}
	else {
		clearInterval(rn);
	}
}, 200);

// boostrap
let btbar = document.getElementById('btprogress'),
	btwidth = parseFloat(getComputedStyle(btbar).width);
let bt = setInterval(function() {

	if(btwidth!==75){
		btwidth += 5;
		btbar.style.width = angwidth + '%';
	}
	else {
		clearInterval(bt);
	}
}, 200);

// jquery
let jqbar = document.getElementById('jqprogress'),
	jqwidth = parseFloat(getComputedStyle(jqbar).width);
let jq = setInterval(function() {

	if(jqwidth!==30){
		jqwidth += 5;
		jqbar.style.width = angwidth + '%';
	}
	else {
		clearInterval(jq);
	}
}, 200);

// c#
let csharpbar = document.getElementById('csharpprogress'),
	csharpwidth = parseFloat(getComputedStyle(csharpbar).width);
let csharp = setInterval(function() {

	if(csharpwidth!==45){
		csharpwidth += 5;
		csharpbar.style.width = csharpwidth + '%';
	}
	else {
		clearInterval(csharp);
	}
}, 200);

// c++
let cplusbar = document.getElementById('cplusprogress'),
	cpluswidth = parseFloat(getComputedStyle(cplusbar).width);
let cplus = setInterval(function() {

	if(cpluswidth!==30){
		cpluswidth += 5;
		cplusbar.style.width = cpluswidth + '%';
	}
	else {
		clearInterval(cplus);
	}
}, 200);

// mongo
let mnbar = document.getElementById('mongoprogress'),
	mnwidth = parseFloat(getComputedStyle(mnbar).width);
let mn = setInterval(function() {

	if(mnwidth!==85){
		mnwidth += 5;
		mnbar.style.width = mnwidth + '%';
	}
	else {
		clearInterval(mn);
	}
}, 200);

// mysql
let mysqlbar = document.getElementById('mysqlprogress'),
	mysqlwidth = parseFloat(getComputedStyle(mysqlbar).width);
let mysql = setInterval(function() {

	if(mysqlwidth!==70){
		mysqlwidth += 5;
		mysqlbar.style.width = mysqlwidth + '%';
	}
	else {
		clearInterval(mysql);
	}
}, 200);

// mysqli
let mysqlibar = document.getElementById('mysqliprogress'),
	mysqliwidth = parseFloat(getComputedStyle(mysqlibar).width);
let mysqli = setInterval(function() {

	if(mysqliwidth!==75){
		mysqliwidth += 5;
		mysqlibar.style.width = mysqliwidth + '%';
	}
	else {
		clearInterval(mysqli);
	}
}, 200);

// english
let engbar = document.getElementById('Englishprogress'),
	engwidth = parseFloat(getComputedStyle(engbar).width);
let eng = setInterval(function() {

	if(engwidth!==85){
		engwidth += 5;
		engbar.style.width = engwidth + '%';
	}
	else {
		clearInterval(eng);
	}
}, 200);

// sinhala
let sinbar = document.getElementById('Sinhalaprogress'),
	sinwidth = parseFloat(getComputedStyle(sinbar).width);
let sin = setInterval(function() {

	if(sinwidth!==100){
		sinwidth += 5;
		sinbar.style.width = sinwidth + '%';
	}
	else {
		clearInterval(sin);
	}
}, 200);

// tamil
let tambar = document.getElementById('Tamilprogress'),
	tamwidth = parseFloat(getComputedStyle(tambar).width);
let tam = setInterval(function() {

	if(tamwidth!==25){
		tamwidth += 5;
		tambar.style.width = tamwidth + '%';
	}
	else {
		clearInterval(tam);
	}
}, 200);


VanillaTilt.init(document.querySelectorAll(".card"),{
	max: 25,
	speed: 400,
	glare: true,
	"max-glare": 0.3
});
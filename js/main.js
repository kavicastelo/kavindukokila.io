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
// Animate all progress bars
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			// Animate progress bars inside this section
			entry.target.querySelectorAll('.progress-bar').forEach(bar => {
				let target = parseInt(bar.getAttribute('aria-valuenow'));
				let width = 0;

				let interval = setInterval(() => {
					if (width >= target) {
						clearInterval(interval);
					} else {
						width++;
						bar.style.width = width + '%';
					}
				}, 10);
			});

			// Stop observing once animation is done
			observer.unobserve(entry.target);
		}
	});
}, { threshold: 0.4 });

// Attach to the "about" section or wherever progress bars exist
const aboutSection = document.querySelector('#about');
if (aboutSection) {
	observer.observe(aboutSection);
}

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
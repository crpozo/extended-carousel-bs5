'use strict';

import Carousel from 'bootstrap/js/src/carousel';

const bootstrap = {
	Carousel
};

class Slider {

	static defaultSelector = 'responsive-carousel';
	static defaultSize = 3;
	selector;
	slidesToShow;
	el;

	constructor(el) {
		this.el = el;
		if(el.dataset.ecToggle) {
			this.selector = Slider.defaultSelector;
			this.slidesToShow = this.setSize(this.el);
			this.setRespondsiveness(this.slidesToShow);
			this.setTransition(this.slidesToShow);
		}
		if(el.dataset.ecThumbnail == 'slider') 
			this.setThumbnail(this.el);
		if(el.dataset.ecThumbnail == 'gallery') 
			this.setControls(this.el);
	}

	setRespondsiveness( slidesToShow ) {
		let slides = this.el.querySelectorAll(`.carousel-item`);
		if(slidesToShow == 1)
			return false;
		slides.forEach(el => {
			let next = el.nextElementSibling;
			for (let i = 1; i < slidesToShow; i++) {
				if(next == null )
					next = slides[0];
				let cloneSlide = next.cloneNode(true);
				el.appendChild(cloneSlide.children[0]);
				next = next.nextElementSibling
			}
		});
	}

	// Adding dynamic css transitions to existing stylesheet
	setTransition( slidesToShow ) {
		let styles = ''
		let css = document.querySelector('style#extended-carousel-transitions');
		if(!css) {
			css = document.createElement('style');
			css.id = 'extended-carousel-transitions';
			css.rel = 'stylesheet';
			css.type = 'text/css';
			document.getElementsByTagName('head')[0].appendChild(css);
		}
		if(slidesToShow > 1)
			styles = 
			`
				@media (min-width: 1200px) {
					#${this.el.id}[data-ec-toggle="${this.selector}"] .carousel-inner .carousel-item-next, 
					#${this.el.id}[data-ec-toggle="${this.selector}"] .carousel-inner .carousel-item-end.active { 
						transform: translateX(${100/slidesToShow}%);
						transition: transform 0.5s linear;
					}
					#${this.el.id}[data-ec-toggle="${this.selector}"] .carousel-inner .carousel-item-start.active, 
					#${this.el.id}[data-ec-toggle="${this.selector}"] .carousel-inner .carousel-item-prev{ 
						transform: translateX(${-100/slidesToShow}%);
						transition: transform 0.5s linear;
					}
					#${this.el.id}[data-ec-toggle="${this.selector}"] .carousel-inner .carousel-item-end,
					#${this.el.id}[data-ec-toggle="${this.selector}"] .carousel-inner .carousel-item-start { 
						transform: translateX(0);
					}
				}
			`;
		css.sheet.insertRule(styles);
	}

	setThumbnail(el) {
		if(!el.dataset.ecThumbnail)
			return false;
		let main = el.querySelectorAll('.carousel')[0];
		let nav = el.querySelectorAll('.carousel')[1];

		if(!main || !nav)
			return false;
		let mainBootstrap = bootstrap.Carousel.getOrCreateInstance(main);
		let navBootstrap = bootstrap.Carousel.getOrCreateInstance(nav);

		main.addEventListener('slide.bs.carousel', (e) => {
			if (e.direction == "left")
				navBootstrap.next();
			if (e.direction == "right")
				navBootstrap.prev();
			});

		nav.querySelectorAll('.carousel-item div').forEach(element => {
			element.addEventListener('click', (e) => {
				let index = parseInt(element.dataset.slideNumber);
				mainBootstrap.to(index);
				e.preventDefault();
			});
		});
	}

	setControls(el) {
		let button = el.querySelector('#controlCarousel');
		let time = el.dataset.ecInterval ? parseInt(el.dataset.ecInterval) : 5000;
		if(!button)
			return false;

			let carousel = bootstrap.Carousel.getOrCreateInstance(el, {
				interval:time,
			});
		
		button.addEventListener('click', function(){
			if(!carousel._isPaused) {
				carousel.pause();
				button.innerHTML = 'Play';
			}
			else {
				carousel.cycle();
				button.innerHTML = 'Pause';
			}
		});
	}

	setSize(el) {
		const size = el.dataset.ecSize;
		if(size)
			return size;
		else
			return Slider.defaultSize;
	}
}

export default Slider;

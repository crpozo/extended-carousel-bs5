'use strict';

class Slider {

	static defaultSelector = 'extended-carousel';
	static defaultSize = 3;
	selector;
	slidesToShow;
	el;

	constructor(el) {
		this.el = el;
		this.selector = Slider.defaultSelector;
		this.slidesToShow = this.setSize(this.el);
		this.setRespondsiveness(this.slidesToShow);
		this.setTransition(this.slidesToShow);
	}

	setRespondsiveness( slidesToShow ) {
		let slides = this.el.querySelectorAll(`.carousel-item`);
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

	// Adding dynamic css to existing stylesheet
	setTransition( slidesToShow ) {
		let css = document.querySelector('link[href="./css/slider-bs5.css"]').sheet;
		let styles = 
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
		css.insertRule(styles);
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

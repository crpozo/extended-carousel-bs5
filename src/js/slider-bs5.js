'use strict';

class Slider {

	selector;
	slidesToShow;

	constructor(selector) {
		this.selector = selector;
		this.slidesToShow = this.setSize();
		this.setRespondsiveness(this.slidesToShow);
		this.setTransition(this.slidesToShow);
	}

	setRespondsiveness(slidesToShow) {
		let slides = document.querySelectorAll(`.carousel[data-ec-toggle=${this.selector}] .carousel-item`);
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

	setTransition( slidesToShow ) {

		var style = document.createElement('style');
		style.innerHTML = 
		`
			@media (min-width: 1200px) {
				[data-ec-toggle="${this.selector}"] .carousel-inner .carousel-item-next, 
				[data-ec-toggle="${this.selector}"] .carousel-inner .carousel-item-end.active { 
					transform: translateX(${100/slidesToShow}%);
				}
				[data-ec-toggle="${this.selector}"] .carousel-inner .carousel-item-start.active, 
				[data-ec-toggle="${this.selector}"] .carousel-inner .carousel-item-prev{ 
					transform: translateX(${-100/slidesToShow}%);
				}
				[data-ec-toggle="${this.selector}"] .carousel-inner .carousel-item-end,
				[data-ec-toggle="${this.selector}"] .carousel-inner .carousel-item-start { 
					transform: translateX(0);
				}
			}
		`;
		document.getElementsByTagName('head')[0].appendChild(style);
	}

	setSize() { 
		const size = document.querySelector(`.carousel[data-ec-toggle=${this.selector}][data-ec-size]`);
		if(size)
			return size.dataset.ecSize;
	}
}

export default Slider;

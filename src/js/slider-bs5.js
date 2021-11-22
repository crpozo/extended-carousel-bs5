'use strict';

import Carousel from 'bootstrap/js/src/carousel';

const bootstrap = {
	Carousel
};

// class Lightbox {

// 	static defaultSelector = '[data-toggle="lightbox"]';

// 	constructor(el) {
// 		this.settings = {
// 			...this.settings
// 		};
	
// 		this.el = el;
// 		this.src = this.getSrc(el);
// 		this.sources = this.getGalleryItems();
// 		this.setSize();
// 		this.createCarousel();
// 		this.createModal();
// 	}

// 	identifier = this.uniqueId();

// 	settings = {
// 		...bootstrap.Modal.Default,
// 		...bootstrap.Carousel.Default,
// 		interval: false,
// 		target: '[data-toggle="lightbox"]',
// 		size: 'xl'
// 	};

// 	carouselOptions = (() => this.setOptionsFromSettings(bootstrap.Carousel.Default))();
// 	carouselElement;
// 	carousel;
// 	sources;
// 	src;
// 	el;

// 	static initialize = function (e) {
// 		e.preventDefault();
// 		const lightbox = new Lightbox(this);
// 		lightbox.show();
// 	};

// 	uniqueId() {
// 		return Math.random().toString(36).substr(2, 9);
// 	}

// 	setOptionsFromSettings(obj) {
// 		return Object.keys(obj).reduce((p, c) => Object.assign(p, { [c]: this.settings[c] }), {});
// 	}

// 	getSrc(el) {
// 		let src = (el).href || 'https://via.placeholder.com/1600x900';
// 		const url = new URL(src);
// 		if (el.dataset.caption) {
// 			url.searchParams.set('caption', el.dataset.caption);
// 		}
// 		return url.toString();
// 	}

// 	getGalleryItems() {
// 		let galleryTarget;
// 		if (this.el.dataset.gallery) {
// 			galleryTarget = this.el.dataset.gallery;
// 		}
// 		const gallery = galleryTarget
// 			? [...new Set(Array.from(document.querySelectorAll(`[data-gallery="${galleryTarget}"]`), (v) => `${this.getSrc(v)}`))]
// 			: [this.src];
// 		return gallery;
// 	}


// 	createCarousel() {
// 		const template = document.createElement('template');
// 		const slidesHtml = this.sources
// 			.map((src, i) => {
// 				let inner = `<img src="${src}" class="d-block w-100 h-100 img-fluid" style="z-index: 1; object-fit: contain;"/>`;
// 				const params = new URLSearchParams(src.split('?')[1]);
// 				let caption = '';
// 				if (params.get('caption')) {
// 					caption = `<p class="lightbox-caption m-0 p-2 text-center text-white small"><em>${params.get('caption')}</em></p>`;
// 				}
// 				return `
// 				<div class="carousel-item ${!i ? 'active' : ''}" style="min-height: 100px">
// 					<div class="ratio ratio-16x9" style="background-color: #000;">${inner}</div>
// 					${caption}
// 				</div>`;
// 			})
// 			.join('');

// 		const controlsHtml =
// 			this.sources.length < 2
// 				? ''
// 				: `
// 			<button class="carousel-control-prev" type="button" data-bs-target="#lightboxCarousel-${this.identifier}" data-bs-slide="prev">
// 				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
// 				<span class="visually-hidden">Previous</span>
// 			</button>
// 			<button class="carousel-control-next" type="button" data-bs-target="#lightboxCarousel-${this.identifier}" data-bs-slide="next">
// 				<span class="carousel-control-next-icon" aria-hidden="true"></span>
// 				<span class="visually-hidden">Next</span>
// 			</button>`;

// 		let classes = 'lightbox-carousel carousel';
// 		if (this.settings.size === 'fullscreen') {
// 			classes += ' position-absolute w-100 translate-middle top-50 start-50';
// 		}
// 		const html = `
// 			<div id="lightboxCarousel-${this.identifier}" class="${classes}" 
// 			data-bs-ride="carousel"
// 			data-bs-interval="${this.settings.interval}">
// 				<div class="carousel-inner">
// 					${slidesHtml}
// 				</div>
// 				${controlsHtml}
// 			</div>`;

// 		template.innerHTML = html.trim();
// 		this.carouselElement = template.content.firstChild;
// 		this.carousel = new bootstrap.Carousel(this.carouselElement, this.carouselOptions);
// 		this.carousel.to(this.sources.includes(this.src) ? this.sources.indexOf(this.src) : 0);
// 		return this.carousel;
// 	}

// }

// document.querySelectorAll(Lightbox.defaultSelector).forEach((el) => el.addEventListener('click', Lightbox.initialize));

// export default Lightbox;


class Slider {

	minPerSlide;

	constructor(minPerSlide) {
		this.minPerSlide = minPerSlide;
		this.setRespondsiveness(this.minPerSlide);
	}

	setRespondsiveness(minPerSlide) {
		
		let items =document.querySelectorAll('.carousel .carousel-item');
		items.forEach(el => {
			let next = el.nextElementSibling;
			for (let i = 1; i < minPerSlide; i++) {
				if(next == null )
					next = items[0];
				let cloneSlide = next.cloneNode(true);
				el.appendChild(cloneSlide.children[0]);
				next = next.nextElementSibling
			}
		});

		Array.from(document.querySelectorAll(
			'.carousel-inner .carousel-item-next')).map((item) => {
				console.log(item);
			// item.style.translateX( 100 / minPerSlide );
		});

	}

}

export default Slider;

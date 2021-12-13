# Description

Extended Slider based on Bootstrap 5 using only carousel component and vanilla js.

Requirements:
- Bootstrap 5

# Installation

`npm i -D extended-carousel-bs5`

# Instructions

Build dist files 

`npm run build`

```
Multiple columns (Responsive)  :   data-ec-toggle="responsive-carousel"
Number of slideshows           :   data-ec-size="4"
Thumbnail slider               :   data-ec-thumbnail="slider"
Thumbnail gallery              :   data-ec-thumbnail="gallery"
```

Demo inside dist/index.html

# Usage

```
  <!-- Multiple Columns Carousel Example -->

    <<div id="carouselMultipleColumns" class="carousel slide" data-ec-toggle="responsive-carousel" data-ec-size="5">
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div> <img src="..."> </div>
        </div>
        <div class="carousel-item">
          <div> <img src="..."> </div>
        </div>
        <div class="carousel-item">
          <div> <img src="..."> </div>
        </div>
        <div class="carousel-item">
          <div> <img src="..."> </div>
        </div>
        <div class="carousel-item">
          <div> <img src="..."> </div>
        </div>
        <div class="carousel-item">
          <div> <img src="..."> </div>
        </div>
      </div>
      <a class="carousel-control-prev bg-transparent w-aut" href="#carouselMultipleColumns" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a class="carousel-control-next bg-transparent w-aut" href="#carouselMultipleColumns" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>

  <!-- Thumbnail Carousel Example -->

    <div data-ec-thumbnail="slider">
      <!-- Main -->
      <div id="carouselMain" class="carousel slide" data-bs-ride="false" data-bs-interval="false">
        <div class="carousel-inner text-center">
          <div class="carousel-item active">
            <div><img src="https://via.placeholder.com/400?text=1" class="img-fluid" alt="..."></div>
          </div>
          <div class="carousel-item">
            <div><img src="https://via.placeholder.com/400?text=2" class="img-fluid" alt="..."></div>
          </div>
          <div class="carousel-item">
            <div><img src="https://via.placeholder.com/400?text=3" class="img-fluid" alt="..."></div>
          </div>
          <div class="carousel-item">
            <div><img src="https://via.placeholder.com/400?text=4" class="img-fluid" alt="..."></div>
          </div>
          <div class="carousel-item">
            <div><img src="https://via.placeholder.com/400?text=5" class="img-fluid" alt="..."></div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselMain" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselMain" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- Nav -->
      <div id="carouselNav" class="carousel slide"data-bs-ride="false" data-bs-interval="false" data-ec-toggle="responsive-carousel" data-ec-size="4">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div data-slide-number="0"><img src="https://via.placeholder.com/200?text=1" class="img-fluid" alt="..."></div>
          </div>
          <div class="carousel-item">
            <div data-slide-number="1"><img src="https://via.placeholder.com/200?text=2" class="img-fluid" alt="..."></div>
          </div>
          <div class="carousel-item">
            <div data-slide-number="2"><img src="https://via.placeholder.com/200?text=3" class="img-fluid" alt="..."></div>
          </div>
          <div class="carousel-item">
            <div data-slide-number="3"><img src="https://via.placeholder.com/200?text=4" class="img-fluid" alt="..."></div>
          </div>
          <div class="carousel-item">
            <div data-slide-number="4"><img src="https://via.placeholder.com/200?text=5" class="img-fluid" alt="..."></div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselNav" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselNav" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

  <!-- Play/Stop Carousel Example -->

    <div id="carouselPlayStop" class="carousel slide" data-ec-thumbnail="gallery" data-ec-interval="5000">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="...">
        </div>
        <div class="carousel-item">
           <img src="...">
        </div>
        <div class="carousel-item">
           <img src="...">
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselPlayStop" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselPlayStop" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="carousel-indicators justify-content-start">
        <img src="https://via.placeholder.com/50/FF0000/FFFFFF?text=1" type="button" class="active" data-bs-target="#carouselPlayStop" data-bs-slide-to="0" alt="Slide 1">
        <img src="https://via.placeholder.com/50/FF0000/FFFFFF?text=2" type="button" data-bs-target="#carouselPlayStop" data-bs-slide-to="1" alt="Slide 2">
        <img src="https://via.placeholder.com/50/FF0000/FFFFFF?text=3" type="button" data-bs-target="#carouselPlayStop" data-bs-slide-to="2" alt="Slide 3">
        <button id="controlCarousel">Pause</button>
      </div>
    </div>
```

# Description

Extended Slider based on Bootstrap 5 using only carousel component and vanilla js.

Requirements:
- Bootstrap 5

# Installation

`npm i @werkraum/extended-carousel-bs5`

# Instructions

```
Initialize funciontalities :   data-ec-toggle="extended-carousel"
Number of slideshows       :   data-ec-size="4"
Thumbnail slider           :   data-ec-thumbnail="true"
```

Demo inside dist/index.html

# Usage

```
  Multiple columns example

  <div class="container mt-5">
    <div id="recipeCarousel" class="carousel slide" data-ec-toggle="extended-carousel" data-ec-size="4">
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div>
            <img src="https://via.placeholder.com/600x400.png/000/FFF?text=1" class="img-fluid">
          </div>
        </div>
        <div class="carousel-item">
          <div>
            <img src="https://via.placeholder.com/600x400.png/000/FFF?text=2" class="img-fluid">
          </div>
        </div>
        <div class="carousel-item">
          <div>
            <img src="https://via.placeholder.com/600x400.png/000/FFF?text=3" class="img-fluid">
          </div>
        </div>
        <div class="carousel-item">
          <div>
            <img src="https://via.placeholder.com/600x400.png/000/FFF?text=4" class="img-fluid">
          </div>
        </div>
        <div class="carousel-item">
          <div>
            <img src="https://via.placeholder.com/600x400.png/000/FFF?text=5" class="img-fluid">
          </div>
        </div>
        <div class="carousel-item">
          <div>
            <img src="https://via.placeholder.com/600x400.png/000/FFF?text=6" class="img-fluid">
          </div>
        </div>
      </div>
      <a class="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a class="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  </div>

  Thumbnail Example

 <div class="container my-5" data-ec-thumbnail="true">
    <h1>Thumbnails</h1>
    <!-- Main carousel -->
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="false" data-bs-interval="false">
      <div class="carousel-inner text-center">
        <div class="carousel-item active">
          <div><img src="https://via.placeholder.com/400x401.jpg" class="img-fluid" alt="..."></div>
        </div>
        <div class="carousel-item">
          <div><img src="https://via.placeholder.com/400x402.jpg" class="img-fluid" alt="..."></div>
        </div>
        <div class="carousel-item">
          <div><img src="https://via.placeholder.com/400x403.jpg" class="img-fluid" alt="..."></div>
        </div>
        <div class="carousel-item">
          <div><img src="https://via.placeholder.com/400x404.jpg" class="img-fluid" alt="..."></div>
        </div>
        <div class="carousel-item">
          <div><img src="https://via.placeholder.com/400x405.jpg" class="img-fluid" alt="..."></div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- Thumbnail carousel -->
    <div id="carouselExampleControls2" class="carousel slide mt-5" data-bs-ride="false" data-bs-interval="false"
    data-ec-toggle="extended-carousel" data-ec-size="4">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div data-slide-number="0"><img src="https://via.placeholder.com/200x201.jpg" class="img-fluid" alt="..."></div>
        </div>
        <div class="carousel-item">
          <div data-slide-number="1"><img src="https://via.placeholder.com/200x202.jpg" class="img-fluid" alt="..."></div>
        </div>
        <div class="carousel-item">
          <div data-slide-number="2"><img src="https://via.placeholder.com/200x203.jpg" class="img-fluid" alt="..."></div>
        </div>
        <div class="carousel-item">
          <div data-slide-number="3"><img src="https://via.placeholder.com/200x204.jpg" class="img-fluid" alt="..."></div>
        </div>
        <div class="carousel-item">
          <div data-slide-number="4"><img src="https://via.placeholder.com/200x205.jpg" class="img-fluid" alt="..."></div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
```


import Slider from './slider-bs5'

(function () {

  var initialize = function() {
    const slider = new Slider("extended-carousel");
    const slider2 = new Slider("extended-carousel-2");
  }

  // in case the document is already rendered
  if (document.readyState!='loading') initialize();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', initialize);

})();

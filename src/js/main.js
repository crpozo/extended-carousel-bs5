
import Slider from './slider-bs5'

(function () {

  var initialize = function() {
    document.querySelectorAll(`.carousel[data-ec-toggle="${Slider.defaultSelector}"]`).forEach((el) => {
      const slider = new Slider(el);
    });
  }

  // in case the document is already rendered
  if (document.readyState!='loading') initialize();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', initialize);

})();

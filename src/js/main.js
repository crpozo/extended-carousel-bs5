
import Slider from './slider-bs5'

(function () {

  var initialize = function() {
    const slider = new Slider(4);
  }

  // in case the document is already rendered
  if (document.readyState!='loading') initialize();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', initialize);

})();

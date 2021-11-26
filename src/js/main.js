
import Slider from './extended-carousel'

(function () {

  var initialize = function() {
    document.querySelectorAll(`.carousel[data-ec-toggle="${Slider.defaultSelector}"]`).forEach((el) => {
      const slider = new Slider(el);
    });
    document.querySelectorAll(`[data-ec-thumbnail="true"]`).forEach((el) => {
      const slider = new Slider(el);
    });
  }

  // in case the document is already rendered
  if (document.readyState!='loading') initialize();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', initialize);

})();

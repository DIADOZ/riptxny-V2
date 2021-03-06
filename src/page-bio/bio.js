import "normalize.css";
import "../styles/main.css";
import "./bio.css";

import "../app/init";

$(window).on("load", function() {
  $(window)
    .scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".body-section").each(function() {
        /* Check the location of each desired element */
        var objectTop = $(this).offset().top;

        /* If the element's top is inside the viewport (plus 150px for padding) then fade it in */
        if (objectTop < windowBottom - 120) {
          //object comes into view (scrolling down)
          $(this).addClass("fade");
        }
      });
    })
    .scroll(); //invoke scroll-handler on page-load
});

import React from "react";

function Weather() {
  return (
    <>
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/sv/57d8619d05/farosund/"
        data-label_1="FÅRÖSUND"
        data-font="Open Sans"
        data-icons="Climacons Animated"
        data-mode="Current"
        data-theme="original"
        data-basecolor=""
        data-textcolor="#404040"
        data-mooncolor="#dfdede"
        data-cloudfill="#f7f7f7"
      >
        Fårösund
      </a>
      {
        !(function (d, s, id) {
          var js,
            fjs = d.getElementsByTagName(s)[0];
          // if (!d.getElementById(id)) {
          js = d.createElement(s);
          js.id = id;
          js.src = "https:weatherwidget.io/js/widget.min.js";
          fjs.parentNode.insertBefore(js, fjs);
          // }
        })(document, "script", "weatherwidget-io-js")
      }
    </>
  );
}

export default Weather;

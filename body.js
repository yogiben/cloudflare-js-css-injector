(function() {
  "use strict";

  var AREA = "body";

  var options = INSTALL_OPTIONS;
  var css = options[AREA + "Css"];
  var js = options[AREA + "Js"];

  // https://stackoverflow.com/a/524721/2191174
  if (typeof css === "string" && css !== "") {
    var target = document[AREA] || document.getElementsByTagName(AREA)[0];
    var style = document.createElement("style");
    style.type = "text/css";

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    target.appendChild(style);
  }

  if (typeof js === "string" && js !== "") {
    try {
      eval(options.headJs);
    } catch (err) {
      console.error("Could not execute script");
    }
  }
})();

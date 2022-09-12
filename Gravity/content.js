chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.isInit) {
    // Unique ID for the className.
    var MOUSE_VISITED_CLASSNAME = "crx_mouse_visited";
    var selected = false;
    // Previous dom, that we want to track, so we can remove the previous styling.
    var prevDOM = null;

    // Mouse listener for any move event on the current document.
    document.addEventListener(
      "mouseover",
      function (e) {
        if (selected === false) {
          var srcElement = e.target;
          if (srcElement.nodeName == "DIV") {
            if (prevDOM != null) {
              prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
            }
            srcElement.classList.add(MOUSE_VISITED_CLASSNAME);
            prevDOM = srcElement;
          }
        }
      },
      false
    );
    document.addEventListener(
      "mousedown",
      function (e) {
        if (selected === false) {
          var srcElement = document.getElementsByClassName(
            MOUSE_VISITED_CLASSNAME
          )[0];

          srcElement.id = "gravity";
          // srcElement.classList.remove(MOUSE_VISITED_CLASSNAME);
          $("body").css("overflow", "hidden");
          $("body").css("position", "absolute");
          $("body").css("top", "0");
          // $("body").css("left", "0");
          $("body").css("height", "100%");
          $("html").css("transform", "scale(0.9)");
          $("body").jGravity({
            target: "div#gravity",
            ignoreClass: "ignoreMe",
            weight: 25,
            depth: 7,
            drag: true,
          });

          selected = true;
        }
      },
      false
    );
    sendResponse({ isInit: true });
  }
});

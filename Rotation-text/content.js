chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var isInitf = "";
  var isInits = "";
  if (request.isInit) {
    var pTags = document.getElementsByTagName("p");
    for (pTag of pTags) {
      var newString = "";
      var words = pTag.innerText.split(" ");
      words.forEach((element) => {
        newString += `<span class='rotated'>${element} </span> `;
      });
      pTag.innerHTML = newString;
    }
    var allSpan = document.getElementsByClassName("rotated");

    for (element of allSpan) {
      element.style["-webkit-transform"] = "rotate(45deg)";
      element.style["display"] = "inline-block";
    }
    isInitf = request.isInit;
  }

  if (request.isInit === false) {
    var allSpan = document.getElementsByClassName("rotated");
    for (element of allSpan) {
      element.style["-webkit-transform"] = "rotate(0deg)";
      element.style["display"] = "inline-block";
    }
    isInitf = request.isInit;
  }

  if (request.isInit2) {
    var allP = document.getElementsByTagName("p");
    for (element of allP) {
      element.style["color"] = "#ff6868";
    }
    isInits = request.isInit2;
  }

  if (request.isInit2 === false) {
    var allP = document.getElementsByTagName("p");
    for (element of allP) {
      element.style["color"] = "#000";
    }
    isInits = request.isInit2;
  }

  sendResponse({ isInit: isInitf, isInit2: isInits });
});

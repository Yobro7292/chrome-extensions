var btn = document.getElementById("rBtn");
var btn2 = document.getElementById("cBtn");
var isInit = false;
var isInit2 = false;

btn.onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs.length) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { isInit: !isInit },
        function (response) {
          console.log("Text rotated : ", !isInit);
          console.log(response);
          isInit = !isInit;
        }
      );
    }
  });
};

btn2.onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs.length) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { isInit2: !isInit2 },
        function (response) {
          console.log("Text color : ", !isInit2);
          console.log(response);
          isInit2 = !isInit2;
        }
      );
    }
  });
};

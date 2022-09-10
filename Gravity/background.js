chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs.length) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { isInit: true },
        function (response) {
          console.log("Gravity started...");
        }
      );
    }
  });
});

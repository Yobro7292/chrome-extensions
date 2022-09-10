console.log("background");
chrome.action.onClicked.addListener(clicked);

function clicked(tab) {
  console.log("clicked");
  var msg = {
    success: true,
    message: "This is message.",
  };
  // chrome.tabs.sendMessage(tab.id, msg);
  console.log(tab);
}

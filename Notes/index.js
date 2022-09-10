// var btn = document.getElementById("doneBtn");
// var clr = document.getElementById("clrBtn");
// var textArea = document.getElementById("note");
// var notes = localStorage.getItem("note");
// if (notes) {
//   textArea.value = notes;
// }
// btn.onclick = () => {
//   localStorage.setItem("note", textArea.value);
// };
// clr.onclick = () => {
//   textArea.value = "";
//   localStorage.setItem("note", "");
// };

chrome.runtime.onMessage.addListener(receive);

function receive(req, sender, res) {
  console.log(req);
}

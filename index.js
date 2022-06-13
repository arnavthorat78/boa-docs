// Download button
const downloadButton = document.querySelector(".download-button");
const downloadMessage = document.querySelector(".download-message");

const osIsMac = navigator.platform.toLowerCase().includes("mac"); // TODO Change navigator.platform to a non-deprecated value
if (!osIsMac) {
  downloadButton.classList.add("disabled");
  downloadMessage.innerHTML = `The installer can only be run on <strong>macOS</strong>.<br /><small style="font-size: 12px;">Hack: To download on <i>${navigator.platform}</i>, you'll need to press <code>Ctrl</code> + <code>Shift</code> + <code>I</code>, or <code>F12</code>. Then, on the <i>Console</i> tab, type <code>disableCheck()</code>. The download button should then be enabled.</small>`;
}

function disableCheck() {
  downloadButton.classList.remove("disabled");
  downloadMessage.innerHTML = "";

  return "Successfully enabled button.";
}

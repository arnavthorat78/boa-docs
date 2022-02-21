/**
 * The button that will be clicked to download the software.
 */
const downloadButton = document.querySelector(".download-button")!;
/**
 * The element for the message to display to the user if their OS does not support the installer.
 */
const downloadMessage = document.querySelector(".download-message")!;

/**
 * A boolean value which indicates if the user is on a `macOS` machine.
 */
const osIsMac = navigator.platform.toLowerCase().includes("mac"); // TODO Change navigator.platform to a non-deprecated value
if (!osIsMac) {
	downloadButton.classList.add("disabled");
	downloadMessage.innerHTML = "The installer can only be run on <strong>macOS</strong>.";
}

/// DOWNLOAD BUTTON ///

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

/// TYPING EFFECT ///

/**
 * The code to appear in a typing effect.
 */
const TEXT_CODE = `truth = "This is the worst code demo ever!"\nprint("Why would anyone look at this demo? " + truth)\nprint("I am not even sure if this is a joke...")\nstrToIter = "LOL"\n\nfor char : strToIter do {\n    \tprint(char)\n}\n\nfor i = 0 to 5 do {\n    \tprint(i)\n}\n\ni = 0\nwhile i < lenOf(strToIter) do {\n    \tprint(strToIter ? i)\n    \ti += 1\n}\n\nprint("Somehow, this all compiled without a memory error in my interpreter!")`;

/**
 * The carousel text.
 */
const carouselList = [{ text: TEXT_CODE }];

/**
 * Type a sentence in typewriter effect.
 *
 * @param sentence The sentence to type.
 * @param eleRef The element reference to type the sentence in.
 * @param delay The number of seconds to wait between each letter typed.
 */
const typeSentence = async (sentence: string, eleRef: string, delay: number = 100) => {
	// Initialization (split the letters and set the counter).
	const letters = sentence.split("");
	let i = 0;

	while (i < letters.length) {
		if (TEXT_CODE.charAt(i) == "\n") {
			document.querySelector("#sentence")!.innerHTML += "<br />";
		} else if (TEXT_CODE.charAt(i) == "\t") {
			document.querySelector("#sentence")!.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
		}
		await waitForMs(delay);
		$(eleRef).append(letters[i]);
		i++;
	}
	return;
};

/**
 * Wait for a number of milliseconds. This is like Python's `sleep()` method.
 *
 * @param ms The number of milliseconds to wait.
 */
const waitForMs = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

$(document).ready(async () => {
	await typeSentence(carouselList[0].text, "#sentence");
});
